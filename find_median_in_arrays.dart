void main() {
  print(findMedianSortedArrays([1,4, 8, 9, 10,], [2,3,5]));
}


double findMedianSortedArrays(List<int> nums1, List<int> nums2) {
  int m = nums1.length;
  int n = nums2.length;

  if( m < 0 || n > 1000 ) return 0.0;
  if( n < 0 || n > 1000 ) return 0.0;
  if( m + n < 1 || m + 1 > 2000 ) return 0.0;

  List<int> mergedList = [ ...nums1, ...nums2]..sort((a, b) => a.compareTo(b));

  final len = mergedList.length;

  if( len % 2 == 0 ) {
    return (mergedList[ len ~/ 2  - 1 ] + mergedList[ len ~/ 2 ]) / 2;
  }

  return mergedList[len ~/ 2].toDouble();
}