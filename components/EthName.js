import { useState, useEffect } from "react"
import { web3 } from '../lib/web3';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import ENS, { getEnsAddress } from '@ensdomains/ensjs'

const ens = new ENS({
  provider: web3.currentProvider,
  ensAddress: getEnsAddress("1")
})

const EnsName = function ({ address }) {

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  let formatedAddress;
  if (address) {
    formatedAddress = address.substr(0, 6) + "..." + address.substr(-4);
  }

  useEffect(async () => {
    const n = await ens.getName(address);
    if (n.name) {
      setName(n.name);
    }
  }, [address])

  useEffect(async () => {
    const n = await ens.name(name).getText("avatar");
    n ?
      setAvatar(n) : null;
  }, [name])

  

  return (
    <div className="eth-name">
      <div className="icon">
        {avatar ? <img src={avatar} /> :
          <Jazzicon diameter={32} seed={jsNumberForAddress(address)} />}
      </div>

      <div className="name">
        <span className="primary">
          {name !== "" ? name : formatedAddress}
        </span>
        <span className="secondary">
          {name ? formatedAddress : null}
        </span>
      </div>
     
    </div>
  )
}

export default EnsName