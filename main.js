function _0x46bc() {
  const _0x23fcfb = [
    "1jQeXKn",
    "quantity",
    "34358820gbgFtQ",
    "Client\x20connected.",
    "25NYaCje",
    "write",
    "META",
    "MSFT",
    "AAPL",
    "alloc",
    "slice",
    "13175530bOMCHv",
    "11pecqNz",
    "730416itPAIW",
    "1049204QKjqxv",
    "Client\x20disconnected.",
    "end",
    "net",
    "78UNojlI",
    "3437958vVPUzW",
    "listen",
    "concat",
    "ascii",
    "price",
    "log",
    "readInt8",
    "reduce",
    "5013ZrKxJF",
    "packetStream",
    "11040gnypCB",
    "packetSequence",
    "int32",
    "symbol",
    "676207eLhRAE",
    "Packet\x20resent.",
    "size",
    "createServer",
    "AMZN",
    "find",
    "data",
    "Packets\x20sent.\x20Client\x20disconnected.",
  ];
  _0x46bc = function () {
    return _0x23fcfb;
  };
  return _0x46bc();
}
const _0x1525f5 = _0x522f;
(function (_0x37c0be, _0x23abce) {
  const _0x18080b = _0x522f,
    _0x3e6b5d = _0x37c0be();
  while (!![]) {
    try {
      const _0x358de8 =
        (parseInt(_0x18080b(0x172)) / 0x1) *
          (-parseInt(_0x18080b(0x180)) / 0x2) +
        parseInt(_0x18080b(0x185)) / 0x3 +
        (parseInt(_0x18080b(0x17f)) / 0x4) *
          (-parseInt(_0x18080b(0x176)) / 0x5) +
        (parseInt(_0x18080b(0x184)) / 0x6) *
          (-parseInt(_0x18080b(0x16a)) / 0x7) +
        (-parseInt(_0x18080b(0x18f)) / 0x8) *
          (-parseInt(_0x18080b(0x18d)) / 0x9) +
        (parseInt(_0x18080b(0x17d)) / 0xa) *
          (-parseInt(_0x18080b(0x17e)) / 0xb) +
        parseInt(_0x18080b(0x174)) / 0xc;
      if (_0x358de8 === _0x23abce) break;
      else _0x3e6b5d["push"](_0x3e6b5d["shift"]());
    } catch (_0x1207e6) {
      _0x3e6b5d["push"](_0x3e6b5d["shift"]());
    }
  }
})(_0x46bc, 0xbb3ad);
const packetData = {
    packetStream: [
      {
        symbol: _0x1525f5(0x17a),
        buysellindicator: "B",
        quantity: 0x32,
        price: 0x64,
        packetSequence: 0x1,
      },
      {
        symbol: _0x1525f5(0x17a),
        buysellindicator: "B",
        quantity: 0x1e,
        price: 0x62,
        packetSequence: 0x2,
      },
      {
        symbol: _0x1525f5(0x17a),
        buysellindicator: "S",
        quantity: 0x14,
        price: 0x65,
        packetSequence: 0x3,
      },
      {
        symbol: _0x1525f5(0x17a),
        buysellindicator: "S",
        quantity: 0xa,
        price: 0x66,
        packetSequence: 0x4,
      },
      {
        symbol: _0x1525f5(0x178),
        buysellindicator: "B",
        quantity: 0x28,
        price: 0x32,
        packetSequence: 0x5,
      },
      {
        symbol: _0x1525f5(0x178),
        buysellindicator: "S",
        quantity: 0x1e,
        price: 0x37,
        packetSequence: 0x6,
      },
      {
        symbol: _0x1525f5(0x178),
        buysellindicator: "S",
        quantity: 0x14,
        price: 0x39,
        packetSequence: 0x7,
      },
      {
        symbol: _0x1525f5(0x179),
        buysellindicator: "B",
        quantity: 0x19,
        price: 0x96,
        packetSequence: 0x8,
      },
      {
        symbol: _0x1525f5(0x179),
        buysellindicator: "S",
        quantity: 0xf,
        price: 0x9b,
        packetSequence: 0x9,
      },
      {
        symbol: _0x1525f5(0x179),
        buysellindicator: "B",
        quantity: 0x14,
        price: 0x94,
        packetSequence: 0xa,
      },
      {
        symbol: _0x1525f5(0x16e),
        buysellindicator: "B",
        quantity: 0xa,
        price: 0xbb8,
        packetSequence: 0xb,
      },
      {
        symbol: _0x1525f5(0x16e),
        buysellindicator: "B",
        quantity: 0x5,
        price: 0xbb7,
        packetSequence: 0xc,
      },
      {
        symbol: _0x1525f5(0x16e),
        buysellindicator: "S",
        quantity: 0xf,
        price: 0xbcc,
        packetSequence: 0xd,
      },
      {
        symbol: "AMZN",
        buysellindicator: "S",
        quantity: 0xa,
        price: 0xbc7,
        packetSequence: 0xe,
      },
    ],
  },
  net = require(_0x1525f5(0x183)),
  PACKET_CONTENTS = [
    { name: _0x1525f5(0x169), type: _0x1525f5(0x188), size: 0x4 },
    { name: "buysellindicator", type: _0x1525f5(0x188), size: 0x1 },
    { name: _0x1525f5(0x173), type: _0x1525f5(0x191), size: 0x4 },
    { name: _0x1525f5(0x189), type: _0x1525f5(0x191), size: 0x4 },
    { name: _0x1525f5(0x190), type: _0x1525f5(0x191), size: 0x4 },
  ],
  PACKET_SIZE = PACKET_CONTENTS[_0x1525f5(0x18c)](
    (_0x28a58e, _0x531ea9) => _0x28a58e + _0x531ea9[_0x1525f5(0x16c)],
    0x0
  ),
  createPayloadToSend = (_0x26e2a7) => {
    let _0x5c850a = 0x0;
    const _0x448e66 = Buffer["alloc"](PACKET_SIZE);
    return (
      PACKET_CONTENTS["forEach"]((_0x218441) => {
        const _0x3655df = _0x522f,
          { name: _0xf2faee, type: _0x4e7440, length: _0x2f4902 } = _0x218441;
        _0x4e7440 === _0x3655df(0x191)
          ? (_0x5c850a = _0x448e66["writeInt32BE"](
              _0x26e2a7[_0xf2faee],
              _0x5c850a
            ))
          : (_0x5c850a += _0x448e66[_0x3655df(0x177)](
              _0x26e2a7[_0xf2faee],
              _0x5c850a,
              _0x2f4902,
              "ascii"
            ));
      }),
      _0x448e66
    );
  },
  orderBook = packetData[_0x1525f5(0x18e)];
let BUFFER_COLLECTOR = Buffer[_0x1525f5(0x17b)](0x0);
const server = net[_0x1525f5(0x16d)]((_0x42c2e9) => {
  const _0x59e30f = _0x1525f5;
  console[_0x59e30f(0x18a)](_0x59e30f(0x175)),
    _0x42c2e9["on"](_0x59e30f(0x170), (_0x3ee13c) => {
        console.log('Incoming data:', _0x3ee13c);
  console.log('Buffer length:', BUFFER_COLLECTOR.length);
      const _0x44edda = _0x59e30f;
      BUFFER_COLLECTOR = Buffer[_0x44edda(0x187)]([
        BUFFER_COLLECTOR,
        _0x3ee13c,
      ]);
      while (BUFFER_COLLECTOR["length"] >= 0x2) {
        const _0x496dcc = BUFFER_COLLECTOR[_0x44edda(0x17c)](0x0, 0x2),
          _0x1f007e = _0x496dcc["readInt8"](0x0),
          _0xe4388d = _0x496dcc[_0x44edda(0x18b)](0x1);
        BUFFER_COLLECTOR = BUFFER_COLLECTOR[_0x44edda(0x17c)](0x2);
        if (_0x1f007e === 0x1)
          orderBook["forEach"]((_0x5adf3b, _0x53ceb5) => {
            const _0x3818c9 = _0x44edda;
            if (Math["random"]() > 0.75) return;
            const _0x534b70 = createPayloadToSend(_0x5adf3b);
            _0x42c2e9[_0x3818c9(0x177)](_0x534b70);
          }),
            _0x42c2e9[_0x44edda(0x182)](),
            console[_0x44edda(0x18a)](_0x44edda(0x171));
        else {
          if (_0x1f007e === 0x2) {
            const _0x1d39a7 = orderBook[_0x44edda(0x16f)](
                (_0x276100, _0x59388a) =>
                  _0x276100["packetSequence"] === _0xe4388d
              ),
              _0xbfaf60 = createPayloadToSend(_0x1d39a7);
            _0x42c2e9[_0x44edda(0x177)](_0xbfaf60),
              console["log"](_0x44edda(0x16b));
          }
        }
      }
    }),
    _0x42c2e9["on"](_0x59e30f(0x182), () => {
      const _0x8dddc4 = _0x59e30f;
      console[_0x8dddc4(0x18a)](_0x8dddc4(0x181));
    });
});
function _0x522f(_0x19e752, _0x450729) {
  const _0x46bc5b = _0x46bc();
  return (
    (_0x522f = function (_0x522fdb, _0x3892d0) {
      _0x522fdb = _0x522fdb - 0x169;
      let _0x57b1df = _0x46bc5b[_0x522fdb];
      return _0x57b1df;
    }),
    _0x522f(_0x19e752, _0x450729)
  );
}
server[_0x1525f5(0x186)](0xbb8, () => {
  const _0x2cc283 = _0x1525f5;
  console[_0x2cc283(0x18a)]("TCP\x20server\x20started\x20on\x20port\x203000.");
});
