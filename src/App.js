import React, {useRef, useState} from 'react'
import './App.css'

import ReactJson from 'react-json-view'

import imgsrc from './images/test'

import data_challenge from './json/challenge'
import jsonata from 'jsonata'

import { validate } from './validator/mco-validator'

const initialCSS = `

    .divLayout {
      width: 500px;
      height: 500px;
    }

    .divHola {
      background-color: cyan;
      width: 50px;
      height: 50px;
    }
    `

const initialHTML = `
  
  <div class='divLayout'>
    <div class="divHola">
      Hola
    </div>
  </div>    
    
`

function App() {  

  const [cssInputTest, setCssInputTest] = useState(initialCSS)
  const [ASTjson, setASTjson] = useState({})
  const userInput = useRef()

  function createMarkup() {
    const data = `<style> ${cssInputTest} </style> ${initialHTML}`
    return {__html: data};
  }  

  return (
    <div className="App">
      <div className="nav">
        Hello Nav
      </div>
      <div className="description">
        <div style={{ margin: '15px'}}>
          Utiliza la propiedad backgroud-color en la clase 
          divHola para cambiar su color de fondo a rojo
        </div>
        
        <button onClick={() => { 
          console.log(validate(userInput.current.value.trim(), 
            data_challenge.challenge.validatorRules))
        }}>Validate</button>
      </div>
      <div>Editor</div>
      <div>Parser</div>
      <div>Box1</div>
      <div>Box2</div>
      <div>
        <div>
          <textarea 
          ref={userInput} 
          value={cssInputTest}
          onChange={value => setCssInputTest(value.target.value)}
          style={{width:'250px', height:'250px'}}
          >

          </textarea>
        </div>
        <div>
          <textarea 
            value={initialHTML}
            style={{width:'250px', height:'250px'}}
            disabled
            >
              
            </textarea>
        </div>
      </div>
      
      
      <div style={{ width: '500px', height: '200px'}}>
        <ReactJson src={ASTjson} />
      </div>
      <div style={{ margin: '5px', background: 'gray', width: '500px', height: '500px'}} dangerouslySetInnerHTML={createMarkup()}></div>
      <div style={{ margin: '5px'}}>
        <img src={imgsrc} alt='Resultado esperado'/>
      </div>
    </div>
  );
}

export default App;
