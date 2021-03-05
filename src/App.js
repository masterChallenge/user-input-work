import React, {useRef, useState} from 'react'
import './App.css'

import ReactJson from 'react-json-view'

import imgsrc from './images/test'

import data_challenge from './json/challenge_layout_flex_center'
import jsonata from 'jsonata'

import { js_beautify, css_beautify, html_beautify } from 'js-beautify'

import { validate } from './validator/mco-validator'

const initialCSS = css_beautify(data_challenge.challenge.editor_data[1].value)

const initialHTML = html_beautify(data_challenge.challenge.editor_data[0].value)

function App() {  

  const [cssInputTest, setCssInputTest] = useState(initialCSS)
  const [ASTjson, setASTjson] = useState({})
  const userInput = useRef()
  
  const [validatorResult, setValidatorResult] = useState({})

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
          {data_challenge.description} 
          
        </div>
        
        <button onClick={() => { 
          console.log(validate(userInput.current.value.trim(), 
            data_challenge.challenge.validatorRules))
          setValidatorResult(validate(userInput.current.value.trim(), 
            data_challenge.challenge.validatorRules))
        }}>Validate</button>
      </div>
      <div>Editor</div>
      <div>Result</div>
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
            
            >
              
            </textarea>
        </div>
      </div>
      
      
      <div style={{ width: '500px', height: '200px'}}>
        <ReactJson src={validatorResult} />
      </div>
      <div style={{ margin: '5px', background: 'gray', width: '500px', height: '500px'}} dangerouslySetInnerHTML={createMarkup()}></div>
      <div style={{ margin: '5px'}}>
        <img src={data_challenge.challenge.image} alt='Resultado esperado'/>
      </div>
    </div>
  );
}

export default App;
