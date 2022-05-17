require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea knife sun tooth guard render remain common inner local flock simple'; 
let testAccounts = [
"0x65bd2325ac8b12e140254e4d3752155662aee3b36eb9944f815abdae13136efa",
"0x23abf88d6da967fb739efc60c841a2bb626cd8d884830566b134c69b8867a5da",
"0x158277759d50bef251b8918bddfd090ce231315ff9e1a13ead2b259416e53c04",
"0x11635f5bc683affc0f909690545c46efcc7356e7f2295f3c81e134860bd41eb4",
"0x620b75933039a23d166667fb9b668fecadf14ea373bf0fb8957d8c9b32297547",
"0x2e745f51943da766b634828211650c7dfeb3a544b045e7e827a6f8642280440c",
"0xc6c5847d26a69040d798b53adf661e5705ae26dc322b69662838ba7a4ba27c94",
"0x18ba15409d1b8d31bfbaaedc328febfa84606ea1eef7213e491b310270beac63",
"0x00165e3264733b07832d312a64df5c6e02fb06da3ef3025df425a0ca2710f9ae",
"0xfd9ce1159f7f3f5b52db066acdea41688a5ef495aa2058937a1d9e2fccc88a4c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

