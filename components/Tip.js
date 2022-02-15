import { web3 } from '../lib/web3'
import { useState, useEffect } from 'react'

const Tip = function () {
  const send = function () {
    alert("send 0.01 ETH please!")
  }

  return (
    <button onClick={send}>Tip 0.01 ETH</button>
  )
}

export default Tip