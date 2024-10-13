const net = require('net');
const fs = require('fs');

const HOST = '127.0.0.1'; 
const PORT = 3000;
const OUTPUT_FILE = 'stock_data.json';

let packets = [];
let missingSequences = [];
let isRequestingMissingPackets = false;

function createPayload(callType, resendSeq = 0) {
  const buffer = Buffer.alloc(2);  
  buffer.writeUInt8(callType, 0);  
  buffer.writeUInt8(resendSeq, 1); 
  return buffer;
}

function parsePacket(buffer) {
  const symbol = buffer.toString('ascii', 0, 4);  
  const buySell = buffer.toString('ascii', 4, 5);  
  const quantity = buffer.readUInt32BE(5);  
  const price = buffer.readUInt32BE(9);     
  const seqNum = buffer.readUInt32BE(13);   

  return {
    symbol,
    buySell,
    quantity,
    price,
    sequence: seqNum
  };
}


const client = net.createConnection({ host: HOST, port: PORT }, () => {
  console.log('Connected to BetaCrew server');
  
 
  const requestPayload = createPayload(1);
  client.write(requestPayload);
});


client.on('data', (data) => {

  const PACKET_SIZE = 17;

 
  for (let i = 0; i < data.length; i += PACKET_SIZE) {
    const packetBuffer = data.slice(i, i + PACKET_SIZE);
    const packet = parsePacket(packetBuffer);
    // packets.push(packet);
    if (!packets.some(p => p.sequence === packet.sequence)) {
        packets.push(packet);
      }
  }

  if (isRequestingMissingPackets) {
    const remainingMissing = findMissingSequences(packets);
    if (remainingMissing.length === 0) {
      console.log('All missing packets received. Saving data...');
      savePacketsToFile();
      client.end();
    } else {
      console.log('Still missing packets:', remainingMissing);
      requestMissingPackets(remainingMissing);
    }
  }
});



client.on('end', () => {
  console.log('Disconnected from server, processing packets...');

  
  const missingSequences = findMissingSequences(packets);
  console.log(missingSequences);
  
  
  if (missingSequences.length > 0) {
    console.log('Missing packets detected:', missingSequences);
    isRequestingMissingPackets = true;
    requestMissingPackets(missingSequences);
  } else {
    console.log('No missing packets. Saving data...');
    savePacketsToFile();
  }
});


function findMissingSequences(packets) {
  const sequences = packets.map(p => p.sequence).sort((a, b) => a - b);
  const missing = [];
  for (let i = sequences[0]; i < sequences[sequences.length - 1]; i++) {
    if (!sequences.includes(i)) {
      missing.push(i);
    }
  }
  return missing;
}


function requestMissingPackets(missingSequences) {
  missingSequences.forEach((seqNum) => {
    const requestPayload = createPayload(2, seqNum);
    client.write(requestPayload);
  });
}


function savePacketsToFile() {
  fs.writeFile(OUTPUT_FILE, JSON.stringify(packets, null, 2), (err) => {
    if (err) throw err;
    console.log(`Data saved to ${OUTPUT_FILE}`);
  });
}
