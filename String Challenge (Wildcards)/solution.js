function StringChallenge(str) { 

    // code goes here  
    const [wildCard, text] = str.split(' ');
  
    return parseInput(wildCard, text); 
  }
  
  function parseInput(wildCard, text){
    let textIndex = 0;
  
    for (
      let wildCardIndex = 0, wildCardIndexLength = wildCard.length, 
      wildCardToken; 
      wildCardIndex < wildCardIndexLength; 
      wildCardIndex += 1, textIndex += 1
    ) {
      wildCardToken = wildCard.charAt(wildCardIndex);
  
      switch (wildCardToken) {
        case '+':
          if (!isMatchPlusSign(text.charAt(textIndex))) {
            return false;
          }
          break;
        case '$':
          if (!isMatchDollarSign(text.charAt(textIndex))) {
            return false;
          }
          break;
        case '*':
          const textToken = text.substring(textIndex);
  
          if (wildCard.charAt(wildCardIndex + 1) === '{') {
            const endBracePosition = wildCard.indexOf('}', wildCardIndex);
            
            const [textIndexJump, isMatched] = isMatchAsteriskSign(
              textToken, 
              +wildCard.substring(wildCardIndex + 2, endBracePosition)
            );
  
            if (!isMatched) {
              return false;
            }
  
            wildCardIndex = endBracePosition;
            textIndex += textIndexJump;
          } else {
            const [textIndexJump, isMatched] = isMatchAsteriskSign(
              textToken
            );
  
            if (!isMatched) {
              return false;
            }
  
            textIndex += textIndexJump;
          }
          break;
        default: throw Error('Problem!')
      }
    }
  
    return textIndex === text.length;
  }
  
  function isMatchDollarSign(strToken) {
    return /[0-9]{1}/.test(strToken);
  }
  
  function isMatchPlusSign(strToken) {
    return /[a-zA-Z]{1}/.test(strToken);
  }
  
  function isMatchAsteriskSign(strToken, sequenceLength = 3) {
    for (
      let strTokenIndex = 1, 
      character = strToken.charAt(0); 
      strTokenIndex < sequenceLength;
      strTokenIndex += 1
    ) {
      if (strToken.charAt(strTokenIndex) !== character) {
        return [strTokenIndex, false];
      }
    }
  
    return [sequenceLength - 1, true];
  }
     
  // keep this function call here 
  console.log(StringChallenge(readline()));