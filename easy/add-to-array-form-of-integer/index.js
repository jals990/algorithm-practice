/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
  var numToInt = num.toString().replace(/\,/g, '');
  numToInt = BigInt(numToInt);
  var sum = numToInt + BigInt(k);
  return sum.toString().split('');
}

console.log(addToArrayForm([2,3,3], 90))