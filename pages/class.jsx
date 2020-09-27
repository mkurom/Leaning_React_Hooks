
import styles from '../styles/Home.module.css'
import React, {Component} from 'react'

class ClassTest extends Component {

  state = {
    word:"Hello World!",
    after_render:"",
  };

  setWord(tmpword){
    console.log("setState");
    this.setState({
      word:tmpword,
    })
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.setState(
      {
        after_render:"after render"
      }
    )
  }

  render(){
    console.log("render");
    return (
      <main className={styles.main}>
        <div>
          <label htmlFor="">Hooks</label>
          <p>{this.state.word}</p>
          <button onClick={() => {
            if (this.state.word == "React Word!"){
              this.setWord("Hello World!");
            } else {
              this.setWord("React Word!");
            }
          }}>
          Add</button>
          <br />
          <p>{this.state.after_render}</p>
        </div>
      </main>
    );
  }
}

export default ClassTest