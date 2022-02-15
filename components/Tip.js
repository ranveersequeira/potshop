import { web3 } from '../lib/web3'
import { useState, useEffect } from 'react'

const Tip = function ({ accounts, isLoggedIn, address }) {
  const send = async function () {
    const price = web3.utils.toWei("0.01", "ether")
    !isLoggedIn ? alert("Please Connect with MetaMask")
      :
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: accounts[0],
            to: address,
            value: web3.utils.toHex(price)
          }
        ]
      })



  }

  return (
    <>
      {accounts[0] === address ?
        <button disabled={true}>This is you</button>
        :
        <button onClick={send} disabled={!isLoggedIn}>Tip 0.01 ETH</button>
      }
    </>
  )
}

export default Tip