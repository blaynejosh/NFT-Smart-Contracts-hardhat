const { network } = require("hardhat")
const { developmentChains, DECIMALS, INITIAL_PRICE } = require("../helper-hardhat-config")

const BASE_FEE = "18"
const GAS_PRICE_LINK = 1e9

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    // const args = [BASE_FEE, GAS_PRICE_LINK]
    const chainId = network.config.chainId

    if (developmentChains.includes(network.name)) {
        log("Local network detected! Deploying mocks...")
        await deploy("VRFCoordinatorV2Mock", {
            from: deployer,
            log: true,
            args: [BASE_FEE, GAS_PRICE_LINK],
        })

        await deploy("MockV3Aggregator", {
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_PRICE],
        })
        log("Mocks Deployed!")
        log("--------------------------------------------------------------------------------")
    }
}

module.exports.tags = ["all", "mocks", "main"]