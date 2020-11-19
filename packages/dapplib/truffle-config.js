require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi bridge tooth guard render remain common just clog metal gather'; 
let testAccounts = [
"0xde6adee9bae331a3614b42728f1604345c87ec3725f4df4760213c22e7012e9a",
"0xb3e2a58ae296c3a9ff164dc501f082f1a1cf00d7b7adcaed91cd6107b6289a52",
"0x2245b3c8102e4c47769d17a65fc1264c144b3a69e315184a3fc31f8f5a749542",
"0xd661c901c75bde57dabc02746f4cea5a41b5a64f4df4e92b5464285d4fa44252",
"0x92e92b201c8416896e01bac3f7da1cf4622c8a9bc8a5c09bcc610bd2040abc2c",
"0x71f1c2b08137f85ba65aaa7f8e101e0c2528e97c195c630ec1692190d1a35dc9",
"0xd8627a021782ffcb588583833a4831eeb7e68e010599e6db12c77602d0494bb9",
"0x822dc5b563df796f6c4ce7f91aa2ca7ae85e2f9ec3d8add73e9fdd79c2ad9070",
"0x518f9b45b7de9b5457c6e7e9f5538bc749f15c67e041016384e8764ea8ba359b",
"0x4492a91b577e79984864dc821a97176cafad43a23426022dc05f9e7bdd04458a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
