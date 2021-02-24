import React, {useRef, useEffect, useState} from 'react'
import './App.css'

import * as csstree from 'css-tree'
import * as cssom from 'cssom'

import stringify from 'json-stringify-safe'

function App() {

  // const [cssInputTest, setCssInputTest] = useState(`
  // body {
  //   background: #eee;
  //   color: #888;
  // }
  // `)

  const [cssInputTest, setCssInputTest] = useState(`
  <style>  
body {
    background: #eee;
    color: #888;
  }
  
 .clase2 {
    background: #FF00FF;
    color: #888;
  }
  
</style>
<div class='clase2'>
text de prueba
</div>
  `)
  const userInput = useRef()
  
  const getInput = function() {
    const datos = userInput.current.value.trim();
    
    const ast = csstree.parse(datos, {
        positions: true,
        tolerant: true
    })
    console.log(csstree.toPlainObject(ast))
    //console.log(JSON.stringify(csstree.toPlainObject(ast)))

    const astcssom = cssom.parse(datos)
    console.log(astcssom)
  }

  function createMarkup() {
    return {__html: cssInputTest};
  }

  useEffect(() => {

  })

  return (
    <div className="App">
      <div className="nav">
        Hello Nav
      </div>
      <div className="description">
        Description
        <button onClick={() => getInput()}>Parse</button>
        <button>Validate</button>
      </div>
      <div>Editor</div>
      <div>Parser</div>
      <div>Box1</div>
      <div>Box2</div>
      <textarea 
        ref={userInput} 
        value={cssInputTest}
        onChange={value => setCssInputTest(value.target.value)}
        style={{width:'250px', height:'500px'}}
        >

        </textarea>
      <div></div>
      <div style={{ width: '500px', height: '200px'}} dangerouslySetInnerHTML={createMarkup()}></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default App;
