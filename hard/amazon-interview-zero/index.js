function maxSetSize(array) {
  let result = [];
  let maxValue = Math.max(...array);

  for( let i =0; i < array.length; i++){
    
    result.push(array[i]);
    
    let aux = [array[i]];

    for(let j = i + 1; j < array.length; j++){
      if (!(array[j] === maxValue && j + 2 == array.length)) {
        aux = [...aux, array[j]]
        result.push(aux)
      }
      
    }
  };

  
  return result.length
}

// let riceBags1 = [1,5,2];
let riceBags1 = [3, 1, 3, 5];
console.log(maxSetSize(riceBags1));

