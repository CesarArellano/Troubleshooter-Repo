String longestCommonPrefix(List<String> strs) {
  if (strs.isEmpty) return '';

  String prefix = strs[0];

  for (int i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix.isEmpty) {
        return '';
      }
    }
  }

  return prefix;
}

void main() {
  final array = ["ac","acc","pccc"];
  print(longestCommonPrefix(array));
}
