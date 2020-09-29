import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import { useState, useReducer, createContext } from "react";

// Context生成
export const Context = createContext()

export default function Home() {
  
  const [word, setWord] = useState("Hello World!");

  // useReducer
  // useStateの代替Hooks
  // オブジェクト型を扱える
  // const [state, dispatch] = useReducer(reducer, initialArg, 初期値);
  // reducer = (state, action) => newState
  // dispatchでreducerを実行する

  const initialState = 0

  //countStateとactionを渡して、新しいcountStateを返すように実装する
  const reducerFunc = (countState, action)=> {
  //reducer関数にincrement、increment、reset処理を書く
  //どの処理を渡すかはactionを渡すことによって判断する
    switch (action){
      case 'increment':
        return countState + 1
      case 'decrement':
        return countState - 1
      case 'reset':
        return initialState
      default:
        return countState
    }
  }
  const [count, dispatch] = useReducer(reducerFunc, initialState)

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
          <h2>{word}</h2>
          <button onClick={() => {
            if (word == "React Word!"){
              setWord("Hello World!");
            } else {
              setWord("React Word!");
            }
            // console.log("useState");
          }}>
          Add</button><br />

          {/* useReducer */}
          <h2>カウント：{count}</h2>
          <button onClick={()=>dispatch('increment')}>increment</button>
          <button onClick={()=>dispatch('decrement')}>decrement</button>

        </div>
      </main>
    </div>
  )
}
