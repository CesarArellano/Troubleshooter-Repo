const lengthOfLongestSubstring = (msg) => {

  const letterIndexMap = {};
  let left = 0;
  let maxLength = 0;

  for(let right = 0; right < msg.length; right++) {
    const letter = msg[right];
    
    if( letterIndexMap.hasOwnProperty(letter) && letterIndexMap[letter] >= left ) {
      left = letterIndexMap[letter] + 1;
    }

    letterIndexMap[letter] = right;

    maxLength = maxLength > right - left + 1 ? maxLength : right - left + 1;
  }

  return maxLength;
} 

const result = lengthOfLongestSubstring('xxqddff');

console.log({result });