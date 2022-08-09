const s_stakingToken = artifacts.require("./s_stakingToken.sol")
const s_rewardsToken = artifacts.require("./s_rewardsToken.sol")
const Stakingdapp = artifacts.require("./Stakingdapp.sol")

module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(Stakingdapp, 0xF63A63EB514D3c2324Ee8770fc12A30aE09aB4Fb, 0xfE1E25411Ff525F6912696146302baD5e4569949 )
    await Stakingdapp.deployed()
  // console.log(stakingdapp)
}
