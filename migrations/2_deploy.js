const s_stakingToken = artifacts.require("./s_stakingToken.sol")
const s_rewardsToken = artifacts.require("./s_rewardsToken.sol")
// const Stakingdapp = artifacts.require("Stakingdapp.sol")



module.exports = async function (deployer, network, accounts) {


  // Deploy GUF token
  await deployer.deploy(s_stakingToken)
   await s_stakingToken.deployed()

  //Deploy MTN Token
  await deployer.deploy(s_rewardsToken)
  await s_rewardsToken.deployed()

  // Deploy staking dapp


  // return deployer.deploy(CrowdSale, CrowdTestToken.address);
//   var HelloWorld = artifacts.require(“HelloWorld”);
// module.exports = function(deployer) {
//     deployer.deploy(HelloWorld, “hello”);
//     // Additional contracts can be deployed here
// };

  // Transfer all tokens to staking dapp
  // await guf.transfer(stakingdapp.address, "0000000000000000000")

  // //Transfer all MTN token to staking dapp
  // await MTN.transfer(accounts[0], "0000000000000000000000")



  
};



