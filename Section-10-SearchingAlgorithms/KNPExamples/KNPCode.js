//*************************************************************************************
// KNP Search - *** reworking video *** watched https://www.youtube.com/watch?v=BXCEFAzhxGY
//*************************************************************************************

// uses as incrementer that compares the end of the long string to the begining of the short string to allow you to bypass the values between and in the short string that match.

// Psuedocode from https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm
// algorithm kmp_search:
//     input:
//         an array of characters, S (the text to be searched)
//         an array of characters, W (the word sought)
//     output:
//         an array of integers, P (positions in S at which W is found)
//         an integer, nP (number of positions)

//     define variables:
//         an integer, j ← 0 (the position of the current character in S)
//         an integer, k ← 0 (the position of the current character in W)
//         an array of integers, T (the table, computed elsewhere)

//     let nP ← 0

//     while j < length(S) do
//         if W[k] = S[j] then
//             let j ← j + 1
//             let k ← k + 1
//             if k = length(W) then
//                 (occurrence found, if only first occurrence is needed, m ← j - k  may be returned here)
//                 let P[nP] ← j - k, nP ← nP + 1
//                 let k ← T[k] (T[length(W)] can't be -1)
//         else
//             let k ← T[k]
//             if k < 0 then
//                 let j ← j + 1
//                 let k ← k + 1

// my attempt based on notes and review

/*
So if you want to do this you can:
1. check to see if the current value of arrSearch (stepOneCounter) matches the current value of arrFind => if true primeCtr++; else primeCtr = secondCtr
2. if secondCtr === arrFind.length then there is a match - set stepOneCounter = stepTwoCounter and do whatever the goal is(i.e. count the match, return the index, etc.)
3. check if the current value arrSearch matches the first value of the find string => if true secondCtr++; else set secondCtr to 0 
*/

const myAttempt = (findArr, searchArr) => {
  let primeCtr = 0,
    secondCtr = 0,
    count = 0,
    i = 0;

  /************************************************************ */
  process.stdout.write(
    `\nFind '${findArr}' inside '${searchArr}'\nindex\tprimeCtr\tprimeTest\t\tcountTest\t\tsecondTest\tsecondCtr\t\tcount\n`
  );
  /************************************************************ */

  while (i < searchArr.length) {
    /************************************************************ */
    process.stdout.write(
      `\t${i}\t\t\t\t${primeCtr}\t\t\t\t${
        searchArr[i] === findArr[primeCtr]
      }\t\t\t\t${
        primeCtr === findArr.length - 1 && searchArr[i] === findArr[primeCtr]
      }`
    );
    /************************************************************ */

    // countTest
    if (primeCtr === findArr.length - 1 && searchArr[i] === findArr[primeCtr]) {
      primeCtr = 0;
      count++;
      i = i - secondCtr;
      secondCtr = 0;
    }

    /************************************************************ */
    process.stdout.write(
      `\t\t\t\t${
        primeCtr > 1 && searchArr[i] === findArr[secondCtr]
      }\t\t\t\t\t`
    );
    /************************************************************ */

    // secondCtr
    secondCtr =
      primeCtr > 1 && searchArr[i] === findArr[secondCtr] ? secondCtr + 1 : 0;

    // primeTest
    if (searchArr[i] === findArr[primeCtr]) {
      primeCtr++;
      i++;
    } else {
      i = i + 1 - secondCtr;
      primeCtr = 0;
      secondCtr = 0;
    }

    /************************************************************ */
    process.stdout.write(
      `${secondCtr}\t\t\t\t\t${count}\n`
    );
    /************************************************************ */
  }
  return count;
};

/************************************************************ */
console.log(
  "\n\n",
  "dsgwadsgz",
  "=>",
  "adsgwadsxdsgwadsgz",
  "1 =",
  myAttempt("dsgwadsgz", "adsgwadsxdsgwadsgz"),
  "\n",
  "aba",
  "=>",
  "ababyababy",
  "2 =",
  myAttempt("aba", "ababyababy"),
  "\n",
  "aba",
  "=>",
  "ababababababa",
  "6 =",
  myAttempt("aba", "ababababababa")
);
/************************************************************ */
