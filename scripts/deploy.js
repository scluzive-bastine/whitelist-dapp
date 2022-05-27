const { ethers } = require('hardhat')

const main = async () => {
  const whitelistContract = await ethers.getContractFactory('Whitelist')

  const deployWhitelistContract = await whitelistContract.deploy(10)
  await deployWhitelistContract.deployed()

  console.log('Whitelist Contract Adress', deployWhitelistContract.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
