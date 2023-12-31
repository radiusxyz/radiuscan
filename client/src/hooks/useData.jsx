const users = [
  '0x9e76f4a22dd5a9bd105433ac5db52308942e44f0',
  '0xe06428cd274662e336919bd5cc7e660dd6f5f3d0',
  '0xdac26028ac5479cb0722c8c62ce567b13efb4547',
  '0x00d4c8c54253277f395e037751818d12c42fd20c',
  '0x9e979d723cf1c11c7067e973c8d349584f1cd7a6',
  '0x93be203a03e22b125384d4e4f5c7373da222092f',
  '0xe43fa6cbb7dda0bd863593c5e75fae9b4dcd5cd4',
  '0x32cf060fff42ed5a31d5c336800529354f93ac1a',
  '0xd924c14f40364e692412dffb65924e448de7b20a',
  '0xccd55bd2fec878dcd749c166e55e42bf41a17d1b',
  '0xef0c0e8c60fb0b0fba2d1af11be8f5c35de8fca9',
  '0xef0c0e8c60fb0b0fba2d1af11be8f5c35de8fca9',
  '0xef0c0e8c60fb0b0fba2d1af11be8f5c35de8fca9',
  '0x1d0ad4b655d8b49ceba4342765245b90bc4bd7e7',
  '0x1a1563ab3819180c6156d6de13c393aa8cf8174d',
  '0x91722db88a8810e2e4ae2e4549aee9eb2b9a4e8a',
  '0xb834ed914228b68b0e1f3e4f1e168ed2b580a35c',
  '0x1b59718eafa2bffe5318e07c1c3cb2edde354f9c',
  '0x41ee28ee05341e7fdddc8d433ba66054cd302ca1',
  '0xd2301aedf58a6ef7c069de1edef76ece00b7d503',
  '0x2d623d3dec2f0b0217ccfb689e1642d84ca845fb',
  '0x5b40a99d6c790158f5c18d5b61bb1c943a633ffe',
  '0x428ab2ba90eba0a4be7af34c9ac451ab061ac010',
  '0xf89d7b9c864f589bbf53a82105107622b35eaa40',
  '0xd1007fb1d5e18f84f262bdfdebc7a450c35aa03f',
  '0xdeaddeaddeaddeaddeaddeaddeaddeaddead0001',
];

const encrypteds = [
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
];

const decrypteds = [
  '0xe673b8a9f0e16943e698830c73924503da9a7c87682d0703ffd44522a0416e43',
  '0x151424bddf90a74a33a18d52203501dba270065dbe0ee516e1b67d64c88940be',
  '0xb52139b69e04f6bf6a85bea28f258de435b666b54360b3c74010186f26f822d6',
  '0x53d9861b7fda306ee8602214a09c66d377163546ef54617d5ee6299672239103',
  '0x425eaac66c6c7c7a8bd90460c88165b026f7b560ef3d38d91ec05adc1cde4ff5',
  '0xac97ded313c8355cdb09a2a08fee401b882e3bec471d30d45c556f0d04abfece',
  '0x3665d056b2625e34ea7e70c0c6bbf73580eaf81247f9552315a5a76b0125fb5c',
  '0xead6ae1eea82d561502fe23fb3237e61a17b6ac974e2e27f0a573a7e41041d2f',
  '0x07c9f935b85bc5f983e68b84f12725def1a5cb3f5f3fcc4fe22bb462aef28263',
  '0xb2a4b88a4f1d392aff8e7fa450420243ab353fee75dcf806c18b5bbabfe48d28',
  '0x44383c4828181ad53423fed08096e67859c4c36e359a2ca709271b63d5211175',
  '0x739158c7b43df7252c74c3c7c8ed5be6b774e4323029e12ee3748c0b67616fb3',
  '0xd7c022e42dc6911c3082a86516f1bff48e83e37a431b885db36e7546d7cc4c30',
  '0xa39eeee24dfdaaa918b39a14868702ca35adf3d6fdc74788874ae31ff411da61',
  '0xf30a37176095d50ea4da8e43e7fe2178b585e7838e783c4753da4825950fe17a',
  '0x147974648dfb199e9c8e4ed9181d44ffcffefc2ebc649118fb7f2972c9035b58',
  '0x4f9aec45b46bf072b978162d7db84a2d0c5dddcc2ff7e992dffa0420d7ddfe81',
  '0x7c0108416642beeeac61ee9fda0cf554221ab545920c142805cbe98f13381667',
  '0xd2ef68376c1836141f9404a3ff89854fcc226f69d93d4fca780a9c5266ab9fe9',
  '0xedb788f18af7eedd305e6d661cf1b587aac30faa2f7a31e352fa15841506e587',
  '0xfd8ddff13de99974331c3c1b252125cd9eb2e49bbfa4c6e680f12e508bb8949d',
  '0x324aafe3858c00066bef0912523daaeed555aeba21f2e76e46aa65bf3220d9b4',
  '0xb6442ea9b7dede559948dfbb477544e718a0d3e679f669b8a348ef1f4687eac1',
  '0x9bd1ff9806600bfb661e0941ebc89b55d33f0a800ccc6ffeb8fabe8a938ae118',
  '0x70d48ea4a0bdc30d2f84e56d7c128e26c40c802c552feb118a504e2fb565c430',
  '0xb765704d843235e2299c229d9eb3f51ab6e123f97b89d6921fa4eeabd26e1231',
];

const followers = [
  '0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55',
  '0x525B40A69f67Ce9939F69EC0CDa00B830c2fF9bF',
  '0xD81Bac23aa1E4e75080d7C5a7D52F8D8f41144c4',
  '0x255fAfc42E5939acB15BD310F9e74DedeD3e9a44',
];

const blocks = [
  {
    height: '114125955',
    sequencer: '0x6514D59960CAcA398E51c3C8f9A515a44eB0CE5C',
    signature: '0x281055afc982d96fab65b3a49cac8b878184cb16',
  },
];

const rollups = [
  {
    title: 'altlayer',
    operators: [
      '0xF46071eA2EC96eE382351B9ac2157B945AaAF91b',
      '0x983D3a6B11289998FB691C16aA6B40846b5dE537',
    ],
  },
  {
    title: 'starknet',
    operators: [
      '0xcf8f24EB55736270e1D1B907bf1e589062998572',
      '0xd3B094E9F0B5F6d25833f0138AE4846442eDA273',
    ],
  },
];

const fromRollup = [
  {
    decrypted:
      '0xe673b8a9f0e16943e698830c73924503da9a7c87682d0703ffd44522a0416e43',
    timestamp: '2023-12-29 11:51:27',
    from: '0x9e76f4a22dd5a9bd105433ac5db52308942e44f0',
    to: '0x20279b6d57ba6d3ef852f34800e43e39d46d6487',
  },
  {
    decrypted:
      '0x151424bddf90a74a33a18d52203501dba270065dbe0ee516e1b67d64c88940be',
    timestamp: '2023-12-29 11:51:27',
    from: '0xe06428cd274662e336919bd5cc7e660dd6f5f3d0',
    to: '0xb49c4e680174e331cb0a7ff3ab58afc9738d5f8b',
  },
  {
    decrypted:
      '0xb52139b69e04f6bf6a85bea28f258de435b666b54360b3c74010186f26f822d6',
    timestamp: '2023-12-29 11:51:27',
    from: '0xdac26028ac5479cb0722c8c62ce567b13efb4547',
    to: '0x20279b6d57ba6d3ef852f34800e43e39d46d6487',
  },
  {
    decrypted:
      '0x53d9861b7fda306ee8602214a09c66d377163546ef54617d5ee6299672239103',
    timestamp: '2023-12-29 11:51:27',
    from: '0x00d4c8c54253277f395e037751818d12c42fd20c',
    to: '0x20279b6d57ba6d3ef852f34800e43e39d46d6487',
  },
  {
    decrypted:
      '0x425eaac66c6c7c7a8bd90460c88165b026f7b560ef3d38d91ec05adc1cde4ff5',
    timestamp: '2023-12-29 11:51:27',
    from: '0x9e979d723cf1c11c7067e973c8d349584f1cd7a6',
    to: '0x5800249621da520adfdca16da20d8a5fc0f814d8',
  },
  {
    decrypted:
      '0xac97ded313c8355cdb09a2a08fee401b882e3bec471d30d45c556f0d04abfece',
    timestamp: '2023-12-29 11:51:27',
    from: '0x93be203a03e22b125384d4e4f5c7373da222092f',
    to: '0x9ec1c3dcf667f2035fb4cd2eb42a1566fd54d2b7',
  },
  {
    decrypted:
      '0x3665d056b2625e34ea7e70c0c6bbf73580eaf81247f9552315a5a76b0125fb5c',
    timestamp: '2023-12-29 11:51:27',
    from: '0xe43fa6cbb7dda0bd863593c5e75fae9b4dcd5cd4',
    to: '0xa062ae8a9c5e11aaa026fc2670b0d65ccc8b2858',
  },
  {
    decrypted:
      '0xead6ae1eea82d561502fe23fb3237e61a17b6ac974e2e27f0a573a7e41041d2f',
    timestamp: '2023-12-29 11:51:27',
    from: '0x32cf060fff42ed5a31d5c336800529354f93ac1a',
    to: '0x0b2c639c533813f4aa9d7837caf62653d097ff85',
  },
  {
    decrypted:
      '0x07c9f935b85bc5f983e68b84f12725def1a5cb3f5f3fcc4fe22bb462aef28263',
    timestamp: '2023-12-29 11:51:27',
    from: '0xd924c14f40364e692412dffb65924e448de7b20a',
    to: '0xd85b5e176a30edd1915d6728faebd25669b60d8b',
  },
  {
    decrypted:
      '0xb2a4b88a4f1d392aff8e7fa450420243ab353fee75dcf806c18b5bbabfe48d28',
    timestamp: '2023-12-29 11:51:27',
    from: '0xccd55bd2fec878dcd749c166e55e42bf41a17d1b',
    to: '0xa062ae8a9c5e11aaa026fc2670b0d65ccc8b2858',
  },
  {
    decrypted:
      '0x44383c4828181ad53423fed08096e67859c4c36e359a2ca709271b63d5211175',
    timestamp: '2023-12-29 11:51:27',
    from: '0xef0c0e8c60fb0b0fba2d1af11be8f5c35de8fca9',
    to: '0x0563c1d22765674fc4c5e07857eb62394dba5f20',
  },
  {
    decrypted:
      '0x739158c7b43df7252c74c3c7c8ed5be6b774e4323029e12ee3748c0b67616fb3',
    timestamp: '2023-12-29 11:51:27',
    from: '0xef0c0e8c60fb0b0fba2d1af11be8f5c35de8fca9',
    to: '0x0563c1d22765674fc4c5e07857eb62394dba5f20',
  },
  {
    decrypted:
      '0xd7c022e42dc6911c3082a86516f1bff48e83e37a431b885db36e7546d7cc4c30',
    timestamp: '2023-12-29 11:51:27',
    from: '0xef0c0e8c60fb0b0fba2d1af11be8f5c35de8fca9',
    to: '0x0563c1d22765674fc4c5e07857eb62394dba5f20',
  },
  {
    decrypted:
      '0xa39eeee24dfdaaa918b39a14868702ca35adf3d6fdc74788874ae31ff411da61',
    timestamp: '2023-12-29 11:51:27',
    from: '0x1d0ad4b655d8b49ceba4342765245b90bc4bd7e7',
    to: '0xb20f0105f3598652a3be569132f7b3f341106ddc',
  },
  {
    decrypted:
      '0xf30a37176095d50ea4da8e43e7fe2178b585e7838e783c4753da4825950fe17a',
    timestamp: '2023-12-29 11:51:27',
    from: '0x1a1563ab3819180c6156d6de13c393aa8cf8174d',
    to: '0xa0dbdb0767afdb382322715a85e877b0f4e08fcf',
  },
  {
    decrypted:
      '0x147974648dfb199e9c8e4ed9181d44ffcffefc2ebc649118fb7f2972c9035b58',
    timestamp: '2023-12-29 11:51:27',
    from: '0x91722db88a8810e2e4ae2e4549aee9eb2b9a4e8a',
    to: '0xdad904e1c8387e0626de1443f112c9d0123e5a03',
  },
  {
    decrypted:
      '0x4f9aec45b46bf072b978162d7db84a2d0c5dddcc2ff7e992dffa0420d7ddfe81',
    timestamp: '2023-12-29 11:51:27',
    from: '0xb834ed914228b68b0e1f3e4f1e168ed2b580a35c',
    to: '0x584f57911b6eedab5503e202f8e193663c9bd3db',
  },
  {
    decrypted:
      '0x7c0108416642beeeac61ee9fda0cf554221ab545920c142805cbe98f13381667',
    timestamp: '2023-12-29 11:51:27',
    from: '0x1b59718eafa2bffe5318e07c1c3cb2edde354f9c',
    to: '0x6f26bf09b1c792e3228e5467807a900a503c0281',
  },
  {
    decrypted:
      '0xd2ef68376c1836141f9404a3ff89854fcc226f69d93d4fca780a9c5266ab9fe9',
    timestamp: '2023-12-29 11:51:27',
    from: '0x41ee28ee05341e7fdddc8d433ba66054cd302ca1',
    to: '0xf9ff53db441a2f6aeff6c36e107dc7f6c5bd0bb5',
  },
  {
    decrypted:
      '0xedb788f18af7eedd305e6d661cf1b587aac30faa2f7a31e352fa15841506e587',
    timestamp: '2023-12-29 11:51:27',
    from: '0xd2301aedf58a6ef7c069de1edef76ece00b7d503',
    to: '0xdc6ff44d5d932cbd77b52e5612ba0529dc6226f1',
  },
  {
    decrypted:
      '0xfd8ddff13de99974331c3c1b252125cd9eb2e49bbfa4c6e680f12e508bb8949d',
    timestamp: '2023-12-29 11:51:27',
    from: '0x2d623d3dec2f0b0217ccfb689e1642d84ca845fb',
    to: '0xdc6ff44d5d932cbd77b52e5612ba0529dc6226f1',
  },
  {
    decrypted:
      '0x324aafe3858c00066bef0912523daaeed555aeba21f2e76e46aa65bf3220d9b4',
    timestamp: '2023-12-29 11:51:27',
    from: '0x5b40a99d6c790158f5c18d5b61bb1c943a633ffe',
    to: '0xf67e42fef26a913cfb6cb24a7fb285fd19d3822a',
  },
  {
    decrypted:
      '0xb6442ea9b7dede559948dfbb477544e718a0d3e679f669b8a348ef1f4687eac1',
    timestamp: '2023-12-29 11:51:27',
    from: '0x428ab2ba90eba0a4be7af34c9ac451ab061ac010',
    to: '0x6f26bf09b1c792e3228e5467807a900a503c0281',
  },
  {
    decrypted:
      '0x9bd1ff9806600bfb661e0941ebc89b55d33f0a800ccc6ffeb8fabe8a938ae118',
    timestamp: '2023-12-29 11:51:27',
    from: '0xf89d7b9c864f589bbf53a82105107622b35eaa40',
    to: '0x1bb1905878bfeea40f11da5bd44ce3b74b74a77b',
  },
  {
    decrypted:
      '0x70d48ea4a0bdc30d2f84e56d7c128e26c40c802c552feb118a504e2fb565c430',
    timestamp: '2023-12-29 11:51:27',
    from: '0xd1007fb1d5e18f84f262bdfdebc7a450c35aa03f',
    to: '0x50bce64397c75488465253c0a034b8097fea6578',
  },
  {
    decrypted:
      '0xb765704d843235e2299c229d9eb3f51ab6e123f97b89d6921fa4eeabd26e1231',
    timestamp: '2023-12-29 11:51:27',
    from: '0xdeaddeaddeaddeaddeaddeaddeaddeaddead0001',
    to: '0x4200000000000000000000000000000000000015',
  },
];

let orders = new Array(encrypteds.length)
  .fill(0)
  .map((_, i) => String(i));
const statuses = ['fail', 'pending', 'success'];

function useData() {
  const pickMember = (arr) =>
    arr[Math.floor(Math.random() * arr.length)];

  const pickNum = (num) => Math.floor(Math.random() * num);

  return encrypteds.map((_, index, arr) => {
    const user = users[index];
    const encrypted = encrypteds[index];
    const decrypted = decrypteds[index];
    const seqSig = `ecdsa-${pickNum(9999)}`;
    const follower = pickMember(followers);
    const block = pickMember(blocks);
    const orderIndex = pickNum(orders.length);
    const order = orders[orderIndex];
    orders = orders.filter((_, i) => i !== orderIndex);
    const timestamp = index.toString();
    const rollup = pickMember(rollups);
    const title = rollup.title;
    const operator = pickMember(rollup.operators);
    const status = pickMember(statuses);
    const fee = `0.${String(pickNum(9999)).padStart(
      8,
      '0'
    )} ETH`;

    return {
      user,
      encrypted,
      decrypted,
      follower,
      seqSig,
      block: {
        height: block.height,
        signature: block.signature,
        sequencer: block.sequencer,
      },
      order,
      timestamp,
      rollup: { title, operator },
      status,
      fee,
    };
  });
}
export default useData;
