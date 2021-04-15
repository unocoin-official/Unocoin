require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 defaultNetwork: "mainnet",

  networks: {
    hardhat: {
    },

    mainnet: {
      url: "",
      accounts: [""]
    }

  rinkeby: {
    url: "",
    accounts: [""]
    }
  },

solidity: {
  version: "0.8.3"
},

paths: {
  sources: "./contracts",
  tests: "./test",
  cache: "./cache",
  artifacts: "./artifacts"
},

mocha: {
  timeout: 20000
}
