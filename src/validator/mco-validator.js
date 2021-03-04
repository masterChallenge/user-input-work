import * as csstree from 'css-tree'
import * as cssom from 'cssom'
import stringify from 'json-stringify-safe'
import jsonata from 'jsonata'

const parser = ( userCSS ) => {

  let isValidCSS = true
  let parseErrors = []
  let cssAST = {}
  
  csstree.parse(userCSS, {
    positions: true,
    tolerant: true,
    onParseError: function(e, fallbackNode) {
      parseErrors.push(e);
    }
  })

  if(parseErrors.length > 0) {
    isValidCSS = false
    return {
      isValidCSS,
      parseErrors
    }
  }

  const astcssom = cssom.parse(userCSS)
  cssAST = JSON.parse(stringify(astcssom))
  
  return {
    isValidCSS,
    parseErrors,
    cssAST
  }
}

const validate = (userCSS, validatorRules) => {
  
  let isChallengePassed = true
  let failed = []

  const { 
    isValidCSS, 
    parseErrors, 
    cssAST } = parser(userCSS)

  if(!isValidCSS) {
    isChallengePassed = false
    return {
      isValidCSS,
      parseErrors,
      isChallengePassed
    }
  }    
    
  validatorRules.forEach(element => {

    let expression = jsonata(element.rule)
    let result = expression.evaluate(cssAST)

    if (!result) {
      isChallengePassed = false
      failed.push(element)
    }
  })

  return {
    isChallengePassed,
    failed,
    isValidCSS,
    parseErrors
  }  
}

export {
  validate,
  parser
}