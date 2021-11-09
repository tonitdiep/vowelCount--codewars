Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  var vowelsCount = 0;
  const vowelArray = ['a', 'e', 'i', 'o', 'u']
  // enter your majic here
  for (let i = 0; i < str.length; i++){
    for (let j = 0; j < vowelArray.length; j++){
      if(str[i] === vowelArray[j]){
        vowelsCount++
      }
    }
  }
  return vowelsCount;
}