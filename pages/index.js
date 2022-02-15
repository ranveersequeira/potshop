import Head from 'next/head'
import Image from 'next/image'
import { web3 } from '../lib/web3';

import { useState, useEffect } from 'react';

import Account from '../components/Account'
import EthName from '../components/EthName'
import Answer from '../components/Answer'
import AnswerForm from '../components/AnswerForm'

export default function Home() {


  return (
    <main>
      <header>
        <h1>potshop</h1>

        <form>
          <input type="text" placeholder="Search" />
        </form>

        <button>Connect</button>
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
            <img src="https://ipfs.io/ipfs/QmbctVN8tPaDLiLysVDwThf7JTJhMejbSypZ4a3v5H2G3a" alt="Avatar of riklomas.eth" />
            <div className="name">
              <span className="primary">ranveer.eth</span>
              <span className="secondary">0xb25bf3...aaf4</span>
            </div>
          </div>
          {/* end EthName */}

        </div>
      </section>

      <section className="answers">
        <div className="loading">Loading answers...</div>
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
