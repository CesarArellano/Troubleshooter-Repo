void main() {
  print(lengthOfLongestSubstring2('xxf'));
}

int lengthOfLongestSubstring(String s) {
  int maxLength = 0;
  int msgLength = s.length;
  List<String> letterList = [];
  if( msgLength < 0 || msgLength > 500000 ) return 0;

  for( int i = 0; i < msgLength; i++ ) {
    final letter = s[i];

    if( !letterList.contains(letter) ) {
      letterList = [ ...letterList, letter ];
      if( i + 1 == msgLength ) {
        maxLength = maxLength > letterList.length ? maxLength : letterList.length;
      }
      continue;
    }

    maxLength = maxLength > letterList.length ? maxLength : letterList.length;
    letterList = [ letter ];
  }

  return maxLength;
}

int lengthOfLongestSubstring2(String s) {
  // Initialize variables
  int maxLength = 0;
  int left = 0;
  Map<String, int> charIndexMap = {};

  // Iterate through the string
  for (int right = 0; right < s.length; right++) {
    String currentChar = s[right];

    // If the character has been seen before, update the left index
    if (charIndexMap.containsKey(currentChar) && charIndexMap[currentChar]! >= left) {
      left = charIndexMap[currentChar]! + 1;
    }

    // Update the character index in the map
    charIndexMap[currentChar] = right;

    // Update the maximum length if necessary
    maxLength = maxLength > right - left + 1 ? maxLength : right - left + 1;
  }

  return maxLength;
}