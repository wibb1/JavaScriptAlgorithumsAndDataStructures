const isSubsequence = (str1, str2) => {
  if (str1.length<1) return true
  let i = 0, j=0
  while (i<str1.length){
    if (str1[i] === str2[j]){
      i++
    } else if (j<str2.length) {
      j++
    } else return false
  }
  return true;
};

console.log(
  isSubsequence('hello','hello world'), // true
  isSubsequence('sing','sting'), //true
  isSubsequence('abc','abracadabra'), // true
  isSubsequence('abc', 'acb') // false
)
