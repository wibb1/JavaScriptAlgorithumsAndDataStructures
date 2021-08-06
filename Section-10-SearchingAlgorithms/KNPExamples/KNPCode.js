/*************************************************************************************
KNP Search - *** reworking video *** 
***********************************************************************************

Uses as incrementor that compares the end of the long string to the beginning of the short string to allow you to bypass the values between that do not match the short string.  This speeds up the search allowing you to jump to the end of the string.  This algorithm is helpful where you are looking for a repeating pattern

Watched https://www.youtube.com/watch?v=BXCEFAzhxGY 
Example Pseudocode at https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm

My attempt based on notes and review

Plan of Attack:
1. Check to see if the current value of arrSearch[primeCtr] matches the current value of arrFind => if true primeCtr++; else primeCtr = secondCtr
2. If secondCtr === arrFind.length then there is a match - set stepOneCounter = stepTwoCounter and do whatever the goal is(i.e. count the match, return the index, etc.)
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

/* This was a fun exercise and I enjoyed the work.  I implemented this in one step rather than the two that are normally done beacuse the goal was only to get a count of the number rather than the positions.   */