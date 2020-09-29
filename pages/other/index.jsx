import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { useState, useEffect, createContext } from "react";
import Child from './child';

// Context生成
export const Context = createContext()

export default function Home() {
  
  const [word, setWord] = useState("Hello World!");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");
  },[])
  // },[count])

  return (
    console.log("render"),
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          
          {/* useState */}
          <button onClick={() => {
            if (word == "React Word!"){
              setWord("Hello World!");
            } else {
              setWord("React Word!");
            }
            console.log("useState");
          }}>
          Add</button>

          {/* useEffect */}
          <p>{`カウント数：${count}`}</p>
          <p>{word}</p>

          {/* useContext */}
          {/* Providerを使用して、子、孫コンポーネントで利用可能にしている */}
          <Context.Provider value={{ money: 10000 }}>
            <Child />
          </Context.Provider>
        </div>
      </main>
    </div>
  )
}
