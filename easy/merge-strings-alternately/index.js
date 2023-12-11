/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let length = word1.length;
  let wordReturn = "";
  let i = 0;
  
  if(word2.length > length){
      length = word2.length
  }
  
  for(; i < length; i++){
      if(typeof word1[i] === 'undefined') {
          wordReturn = wordReturn.concat(word2[i])
      }else if(typeof word2[i] === 'undefined'){
          wordReturn = wordReturn.concat(word1[i])
      }else{
          wordReturn = wordReturn.concat(word1[i], word2[i])
      }
  }
  return wordReturn
};

let word1 = 'Hello'
let word2 = 'World'

console.log(mergeAlternately(word1, word2))