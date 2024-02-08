import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState("light")
  const [result, setResult] = useState(0)
  const [fieldCalc, setFieldCalc] = useState("")

  function changeTheme(){
    setTheme(theme === "light" ? "dark" : "light")
  }

  function onChangeField(event){
    setFieldCalc(event.target.value)
  }

  function calculate(){
    setResult(eval(fieldCalc))
  }

console.log(result)

  return (
    <div class={`container ${theme}`}>
      <div class="eachCol left">
        <div>
          <div class="textHeader">simples cal</div>
          <div onClick={changeTheme} id="themeButton" class="containerIcon">
            <i id="iconTheme" class="fas fa-moon"></i>
          </div>
        </div>
        <input onChange={onChangeField} id="inputCalc" placeholder="240x30" />
        <button onClick={calculate} className='calculateButton'>calculate</button>
        <div>*press enter to find out the total</div>
      </div>
      <div class="eachCol right">
        <div id="historicButton" class="containerIcon">
          <i id="iconTheme" class="fas fa-history buttonRight"></i>
        </div>
        <div id="historicView" class="containerHistoric">

        </div>
        <div  id="result" class="resultText">{result}</div>
        <div>→ view keyboard shortcuts</div>
      </div>
    </div>

  )
}

export default App;
