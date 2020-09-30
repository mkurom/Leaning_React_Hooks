import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';

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
  const [value, setValue] = useState(1000);

  const [test, setTest] = useState({
    test1: 1,
    test2: 2
  });

  const countUp = () => {
    console.log("countUp-test", test);
    // 更新時にtest2が消えている
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
  // },[])
  },[count])


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
          <h1>・useState</h1>

          <Button variant="contained"
          onClick={() => {
            if (word == "React Word!"){
              setWord("Hello World!");
            } else {
              setWord("React Word!");
            }
            console.log("useState");
          }}>chenge word</Button>
          <p>{word}</p>

          <p>オブジェクトを扱う時の注意</p>
          <button className="buttonView" onClick={countUp}>{`Testボタン`}</button>

          {/* useEffect */}
          <h1>・useEffect</h1>
          <Button variant="contained" color="primary" onClick={ () => {
            // setCount(count++)
            setCount(prevCount => prevCount + 1)
          }}>+</Button>

          <Button variant="contained" color="secondary" onClick={ () => {
            setCount(count - 1)
          }}>-</Button>
          <p>{`カウント数：${count}`}</p>

          {/* useContext */}
          {/* Providerを使用して、子、孫コンポーネントで利用可能にしている */}
          <h1>・useContext</h1>
          <p>親コンポーネントから子コンポーネントを通さずに孫コンポーネントでvalueを使用</p>
          <Context.Provider value={{ money: value }}>
            {console.log("parent component")}
            <Child />
          </Context.Provider>
          
          <TextField id="text" type="text" value={value} onChange={(e) => {
            setValue(e.target.value)}} />

        </div>
      </main>
    </div>
  )
}
