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

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>WhiteList Addresses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Home
