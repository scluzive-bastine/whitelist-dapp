import Head from 'next/head'
import Image from 'next/image'
import Web3Modal from 'web3modal'
import { providers, Contract } from 'ethers'
import { useState, useEffect, useRef } from 'react'
import { WHITELIST_CONTRACT_ADDRESS, abi } from '../constants/index'

const Home = () => {
  const [walletConnected, setWalletConnected] = useState(false)
  const [joinedWhitelist, setJoinedWhitelist] = useState(false)
  const [loading, setLoading] = useState(false)
  const [numberOfWhitelisted, setNumberOfWhitelisted] = useState(0)
  const web3ModalRef = useRef()

  const getProviderOrSigner = async (needSigner = false) => {
    //connect to Metamask
    const provider = await web3ModalRef.current.connect()
    const web3Provider = new providers.Web3Provider(provider)

    // check if user is connected to Rinkeby network
    const { chainId } = await web3Provider.getNetwork()
    if (chainId !== 4) {
      window.alert('Change network to Rinkeby')
      throw new Error('Change network to Rinkeby')
    }

    if (needSigner) {
      const signer = web3Provider.getSigner()
      return signer
    }
    return web3Provider
  }

  const addAddressToWhitelist = async () => {
    try {
      const signer = await getProviderOrSigner(true)
      const contract = new Contract(WHITELIST_CONTRACT_ADDRESS, abi, signer)

      const tx = await contract.addAddressToWhitelist()
      setLoading(true)
      await tx.wait()
      setLoading(false)
      await getNumberOfWhitelisted()
      setJoinedWhitelist(true)
    } catch (error) {
      console.log(error)
    }
  }

  const getNumberOfWhitelisted = async () => {
    try {
      const signer = await getProviderOrSigner()
      const contract = new Contract(WHITELIST_CONTRACT_ADDRESS, abi, signer)

      const _numberOfWhitelisted = await contract.numAddressesWhitelisted()
      setNumberOfWhitelisted(_numberOfWhitelisted)
    } catch (error) {
      console.log(error)
    }
  }

  const checkIfAddressInWhitelist = async () => {
    try {
      const signer = await getProviderOrSigner(true)
      const contract = new Contract(WHITELIST_CONTRACT_ADDRESS, abi, signer)

      const address = await signer.getAddress()
      const _joinedWhitelist = await contract.whitelistedAddresses(address)
      setJoinedWhitelist(_joinedWhitelist)
    } catch (error) {
      console.log(error)
    }
  }

  const connectWallet = async () => {
    try {
      await getProviderOrSigner()
      setWalletConnected(true)
      checkIfAddressInWhitelist()
      getNumberOfWhitelisted()
    } catch (error) {
      console.log(error)
    }
  }

  const renderButton = () => {
    if (walletConnected) {
      if (joinedWhitelist) {
        return (
          <div className="description">Thanks for joining the Whitelist!</div>
        )
      } else if (loading) {
        return <button className="button">Loading...</button>
      } else {
        return (
          <button className="button" onClick={addAddressToWhitelist}>
            Join Whitelist
          </button>
        )
      }
    } else {
      return (
        <button className="button" onClick={connectWallet}>
          Connect Wallet
        </button>
      )
    }
  }

  useEffect(() => {
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: 'rinkeby',
        providerOptions: {},
        disableInjectedProvider: false,
      })
      connectWallet()
    }
  }, [walletConnected])

  return (
    <div>
      <Head>
        <title>WhiteList Addresses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid min-h-screen grid-cols-2 items-center space-x-5 px-5">
        <div className="flex justify-center">
          <div>
            <h1 className="title">Welcome to Crypto Engineers!</h1>
            <div className="description">
              Its an NFT collection for engineers in Crypto.
            </div>
            <div className="description">
              {numberOfWhitelisted} have already joined the Whitelist
            </div>
            {renderButton()}
          </div>
        </div>
        <div className="flex justify-center">
          <img className="image" src="./image.svg" />
        </div>
      </div>
    </div>
  )
}

export default Home
