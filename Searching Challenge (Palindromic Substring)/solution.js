function SearchingChallenge(str) { 

    // code goes here  
    const minLength = 3;
  
    for(
      let strIndex = 0, strEndIndex, compareStr, 
      strLength = str.length, 
      maxCompareStrLength = strLength - minLength; 
      strIndex < maxCompareStrLength; 
      strIndex += 1
    ) {
      strEndIndex = minLength + strIndex;
      
      while(strEndIndex <= strLength) {
        compareStr = str.substring(strIndex, strEndIndex);
  
        if (isPalindrome(compareStr)) {
          return compareStr.trim();
        }
  
        strEndIndex += 1;
      }
    }
  
    return 'none'; 
  
  }
  
  function isPalindrome(text) {
    return text === text.split('').reverse().join('')
  }
     
  // keep this function call here 
  console.log(SearchingChallenge(readline()));
  