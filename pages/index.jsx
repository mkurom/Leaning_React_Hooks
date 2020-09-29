import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { useState, useEffect, createContext } from "react";
import Child from './child';

// Context生成
export const Context = createContext()

export default function Home() {
  
  // ----- useState -----
  //    [変数,  関数   ] = useState(初期値);
  // 初期値にオブジェクト型を扱うのには注意が必要
  const [word, setWord] = useState("Hello World!");
  const [count, setCount] = useState(0);

  const [test, setTest] = useState({
    test1: 1,
    test2: 2
  });

  const countUp = () => {
    console.log("countUp-test", test);
    setTest({ 
      test1: 3,
      // test2: 4
    });
  };

  // ----- useEffect -----
  // useEffect(関数
  // , 依存する値の配列
  // )
  // 依存する値が変わるとuseEffectで指定した関数が実行される
  // 依存する値を指定しない場合はレダリングが終了した後に一回だけ実行される
  // useEffect(() => {
  //   console.log("useEffect");
  //   // ブラウザのタイトル部分
  //   document.title =`${word}`;
  // // })
  // },[word])

  useEffect(() => {
    console.log("useEffect");
  },[])
  // },[count])


  // ----- useContext -----
  // コンポーネント間のバケツリレーの解消
  // 親コンポーネントから受け取りたい子、孫コンポーネントに以下のようにコードを書く（この例ではgrandchild.jsx）
  // Contextは親からインポートする（value={{ money: 10000 }}のこと）
  // useContextの引数に親コンポーネントのContext.Providerのvalueの値を取得できる
  // import { Context } from './index';
  // const { money } = useContext(Context)

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

          <button className="buttonView" onClick={countUp}>{`ボタン`}</button>

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
