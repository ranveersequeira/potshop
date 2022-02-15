import EthName from './EthName'

const Account = function ({ accounts, isLoggedIn, connect }) {
  console.log(connect)
  return (
    <>
      {isLoggedIn ? <EthName address={accounts[0]} /> : <button onClick={connect}>Connect</button>}
    </>


  )
}

export default Account;