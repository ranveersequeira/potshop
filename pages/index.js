import Head from 'next/head'
import Image from 'next/image'
import { web3 } from '../lib/web3';

import { useState, useEffect } from 'react';

import Account from '../components/Account'
import EthName from '../components/EthName'
import Answer from '../components/Answer'
import AnswerForm from '../components/AnswerForm'

export default function Home() {
  const [accounts, setAccounts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [answers, setAnswers] = useState([]);

  const connect = async () => {
    const acc = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccounts(acc);
    console.log("connect called")
  }

  useEffect(() => {
    if (accounts.length > 0) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [accounts])

  useEffect(async () => {
    const a = await window.ethereum.request({ method: 'eth_accounts' });
    setAccounts(a);

    window.ethereum.on("accountsChanged", (a) => setAccounts(a));

    fetch("/api/answers")
      .then(response => response.json())
      .then(data => {
        setAnswers(data.answers)
        setIsLoading(false);
      })

  }, [])

  return (
    <main>
      <header>
        <h1>potshop</h1>

        <form>
          <input type="text" placeholder="Search" />
        </form>
        <Account accounts={accounts} connect={connect} isLoggedIn={isLoggedIn} />
      </header>

      <section className="question">
        <div className="main">
          <h3>Feedback forum</h3>
          <h2>Looking for feedback as a beginner</h2>
          <p>Hey everyone, I&apos;m a new potter, just 4 weeks into my journey, and I&apos;m looking to get some feedback on what I&apos;ve made so far. I&apos;m particularly interested in how to make rustic looking bowls and pots, and I&apos;d love to know what the best tools to use would be!</p>

          <div className="slides">
            <Image src="/image-1.jpg" width="600" height="800" />
            <Image src="/image-2.jpg" width="600" height="800" />
            <Image src="/image-3.jpg" width="600" height="800" />
            <Image src="/image-4.jpg" width="600" height="800" />
          </div>
        </div>
        <div className="meta">
          
          {/* EthName */}
          <div className="eth-name">
            <img src="https://geekflare.com/wp-content/uploads/2020/10/image-hosting.jpg" alt="Avatar of ranveer.eth" />
            <div className="name">
              <span className="primary">ranveer.eth</span>
              <span className="secondary">0xb25bf3...aaf4</span>
            </div>
          </div>
          {/* end EthName */}

        </div>
      </section>

      <section className="answers">
        {isLoading ?
          <div className="loading">Loading answers...</div> :
          <>
            {answers.map((answer, idx) => {
              return <Answer answer={answer} number={idx + 1} accounts={accounts} isLoggedIn={isLoggedIn} />

            })}
          </>

        }
        <AnswerForm accounts={accounts} setAnswers={setAnswers} isLoggedIn={isLoggedIn} />
      </section>

      <Head>
        <title>Looking for feedback as a beginner – Feedback forum – potshop </title>
        <meta property="og:title" content="Looking for feedback as a beginner on potshop" />
        <meta property="og:description" content="This is a project on the SuperHi Crypto + Web3 for Creatives course" />
        <meta property="og:image" content="/social.png" />
      </Head>
    </main>
  )
}
