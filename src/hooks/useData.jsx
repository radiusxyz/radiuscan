const decTxs = [
  '0x705BA02F8883741B7bC9704777427eb909b3751f',
  '0x84Ca2b1c1f7f043Dde531A428Fc765C6637A6f5e',
  '0xE0bD1Da5a7A1F07d37445507370398f72689B1F7',
  '0x6BAE181e7AAd23c124db01Bb31a17B4d2C5E2623',
  '0x55c1644098A152417B7d933815bC2f6ca5626800',
  '0x3bC7E42EB323c79CF8CaDE6351dE276D7cc62847',
  '0x7661c0C98B4B122eaC5b9090F0B42037Fd98D0f8',
  '0xc0249212d476E9C116cCAAe15923D9210d2C00b6',
  '0x854F3503C167839a415b121002480721c36211Ac',
  '0xD847C054A0D15A5Acd8bED3648BB8978Bb3D9ef1',
  '0xc55530BF1124458725B1C5b3472c2190eE24cba6',
  '0x7DD996d47bE8563E36649A90Eb730eDf9dAcf77a',
  '0xa0Da6556173C7D8Ed2c8f9201AF4d03E51bc307d',
  '0x7610EDC7FF8884eB5E8C178c5bAFe20520BCef92',
  '0x543524DF01b271B37fc6e6ee9C15D375B67BFD25',
  '0x8f8e40a5b94Ed89F0E1d1e16f03C26f4E3B67c4c',
  '0xb8c08C9e1c442D45a6CC2F34ccEE524F77B9daB1',
  '0x3f20D806825DE606aF28F56f0BFa19cAa315771A',
  '0xD5CC49d69d2238D0fCFBf6a120F4dcE0cceb59d4',
  '0xAaBb2181EF1CcdF25c9BA1013Fb805628204f1Be',
  '0xd867a333b6B3F51955a57FB6fEFb5341f438309a',
  '0x6A8079811D6AFf44F02891B1c342a9FB3f58d763',
  '0xc73baC7d177ec91dEe33d2B4cE2FC9f16aC74f10',
  '0x30471bf4A16046FE2b4cD325f0f718949864EC04',
  '0x11B173e1DB1a0438a6BC8E3b678bD7e4F0F013b3',
  '0x341dA9d48D7868e664Ee2e1500f0D38cce423bAe',
  '0x79941148C4ea22c9Ac8B1d661a4D156C5a7b16B8',
  '0x6051BC74D44Ee15fbeD729F7B2431EE5163bf9f6',
  '0x53d6cE51dA8444f746Fb49d878Ba05F5edd91a88',
  '0xEfeb6B559f255e999eF570c0cd35E6246C4f1253',
  '0x41F82e1Aa813a976d2a5d0594a6B05bcfEC9194B',
  '0x6ce0A5Da6a2aDfCA5506a785CF481d52c9ea9782',
  '0x2C25bbda8BA3C44e25235A0B72B110c1eDB66429',
  '0x8c6b58FA24b97dd34f0F95960bc03117316adB3F',
  '0xA2A207b08C74E0a15176E717F30fD18DC54D263e',
  '0x98eB05e8028d219BD8575abf93021141b558f714',
  '0x722ba76FF54C930AE05cF8d567ebeC226110C1AD',
  '0x287Ee7419A6a7b379D55facb59c530A3556EFcBd',
  '0x0F415B200864E47F9f3715015344053679994e4D',
  '0x8236BB2366d16074a48eAcA7F2De25f2B3009f52',
];

const users = [
  '0xF9b77fcf66edBC5aD6EC01368c760EE8Dfc1e697',
  '0xcB81aB3f5A81420e12f475904E2147a70b4F6682',
  '0x17720D5A01Be8107BFEbe1bA62cc5d204a858674',
  '0x2b3a99e2dFA4cB99DAC80d17f7d0Fd72c535Aaf6',
  '0xA56de31220e562c0299F3C52BebbdFBB62B63647',
  '0xB7bE96534C2672367d4d10Eb62494d1cE60301Ea',
  '0x67583e7cD9193bbd965dEd85e21dA01938E7A5Af',
  '0x166BC2C4aC656ef32691f1F6C642134EE66A6674',
  '0x86a292E91A4400da46bad3D1C8dfaBAF78F8558B',
  '0xe33023fe2E3576F69fE8B50ee8Ff280d0A3917D4',
];

const encTxs = [
  '0x48390752a6c1ED8d5d25bDe85c0756DE2b85F278',
  '0xFA523EA3100f1BdC018b15b81A90eB79FFED01E5',
  '0x856205fddE2c5e7659685e91E4fbA64a240A929f',
  '0x6C5a693494f87B628a3cC79F9e7c68A64bB4956C',
  '0x49a8AFbA3cFa6529Eda53cc8567a64EBf550415f',
  '0x9a39c478e6b56e23e1eDf0E9E199BB3A7F1EDB8B',
  '0xFf9c8F00015d69D91CF148B04Ca4daeFf2cb0657',
  '0x750ea382F49962AD58047955d410990da509cE19',
  '0xc63b87604408361963C5CE3EF086EFa53F59ff3c',
  '0xaD1C1502329EfdDe9194e5567648218D57E22e70',
  '0x3E4Ce44C575D427fc2970C76E07Fc925BfD31d08',
  '0xfCcBE1530827F3E069c82473ed9A87bce4800300',
  '0xD5A7c9c413a87aD5D669191CA1D6d91CAA59bf1a',
  '0xcE46520324b9275de5b5D16a46199eB28956B13C',
  '0x4221E9f7cdF4c11bef4742dA8B510fc35d7c6094',
  '0xd0B69FaFb114dd1035c274483745E390B1102628',
  '0x573741165f6c5Be4cb0083cdfDc1e030Ab6FEC65',
  '0x360C9c96cB4E3baf2e8BDaABD7261aCBea9fa952',
  '0xC979c2B43E5A83eECBb05BD96C8046134F43a27e',
  '0xCe54812b8C9661ff4EcDBB547E10C851E1871007',
  '0xdF85f03Badc992DfD54fc06AD4340fc57923b5a5',
  '0xb39e708D8A7F8c5Eafe1050a217174f66D107d6f',
  '0x43A38BdCB14A8278e98f04Ec637Eb12269Ac2E17',
  '0xac70Ccdc079b7d9E47AAd4fb3E13a88565916B69',
  '0x834d5d7eEB11325d98308e03C3E5A3dA823cE33C',
  '0x47f5B352764eF442037543459b112b9d20164775',
  '0xb262e88565858EA333354A1B9Ac12C9A73eb1ed1',
  '0x7737AbbA056b2E21f9Ee808b4f8e35a47C1309f6',
  '0x159609aFEa12461D57a400800eAc2Bd70A220Fa2',
  '0x9CE436Ea0cF6000856d5764c5eB921d1f73E0CA6',
  '0x23cE201Ef54027e3fe469A3d0d0EEbB63DCaA55B',
  '0xDfe52ADc1624d196114F2386E86ac9667bf7c8F5',
  '0x428b2A3BEDa7570A27Bf733569cc64cB93B94cbf',
  '0x2C10CeF180c22E179216CF87A665735b9a1b59c5',
  '0xfbCf7b54b460f5A9dF2C95777d4A4f408CF27d90',
  '0x056201aFe2698b77ad240F087711f327d2126518',
  '0x577Ee90857C800c7D8Df05f819D701F83544235F',
  '0xC06ac23D4aeFF713b5BfB4eAaE4c4D294BD67959',
  '0xeAbE97E48032F9cf49698ed4A0B9bb88aB1E75Ce',
  '0x695F79E34972915c849aF90FFb9a211BF603697f',
];

const seqFs = [
  '0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55',
  '0x525B40A69f67Ce9939F69EC0CDa00B830c2fF9bF',
  '0xD81Bac23aa1E4e75080d7C5a7D52F8D8f41144c4',
  '0x255fAfc42E5939acB15BD310F9e74DedeD3e9a44',
];

const seqLs = [
  '0x6514D59960CAcA398E51c3C8f9A515a44eB0CE5C',
  '0x30400A149D97866B8a5a639e48e93A4E08A15705',
];

const rollups = ['altlayer', 'starknet'];

const rollOps = {
  altlayer: [
    '0xF46071eA2EC96eE382351B9ac2157B945AaAF91b',
    '0x983D3a6B11289998FB691C16aA6B40846b5dE537',
  ],
  starknet: [
    '0xcf8f24EB55736270e1D1B907bf1e589062998572',
    '0xd3B094E9F0B5F6d25833f0138AE4846442eDA273',
  ],
};

const statuses = ['fail', 'pending', 'success'];

function useData() {
  const pickAddr = (arr) =>
    arr[Math.floor(Math.random() * arr.length)];

  const pickNum = (num) => Math.floor(Math.random() * num);

  return decTxs.map((_, index) => {
    const user = pickAddr(users);
    const encTxHash = pickAddr(encTxs);
    const decTxHash = pickAddr(decTxs);
    const seqF = pickAddr(seqFs);
    const seqL = pickAddr(seqLs);
    const block = pickNum(10).toString();
    const order = pickNum(100).toString();
    const timestamp = index.toString();
    const rollup = pickAddr(rollups);
    const rollOp = pickAddr(rollOps[rollup]);
    const status = pickAddr(statuses);
    const fee = `${pickNum(30001) / 100000000} ETH`;

    return {
      user,
      encTxHash,
      decTxHash,
      seqF,
      seqL,
      block,
      order,
      timestamp,
      rollup,
      rollOp,
      status,
      fee,
    };
  });
}
export default useData;
