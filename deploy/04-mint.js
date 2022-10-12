// const { network, ethers } = require("hardhat")

// module.exports = async ({ getNamedAccounts }) => {
//     const { deployer } = await getNamedAccounts()
//     const chainId = network.config.chainId

//     // Basic NFT
//     const basicNft = await ethers.getContract("BasicNft", deployer)
//     const basicMintTx = await basicNft.mintNft()
//     await basicMintTx.wait(1)
//     console.log(`Basic NFT index 0 tokenURI: ${await basicNft.tokenURI(0)}`)
// }
