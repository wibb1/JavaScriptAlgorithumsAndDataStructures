Uses as incrementer that compares the end of the long string to the begining of the short string to allow you to bypass the values between if your comparison does not match.

let arrSearch = "adsgwadsxdsgwadsgz";

let arrFind = "dsgwadsgz";

| index | primeCtr | prime<br>Tests | second<br>Test  | secondCtr | second<br>Index |countTest                         | count |
|:-----:|:--------:|:--------------:|:---------------:|:---------:|:---------------:|:---------------------------------|:-----:|
|   0   | 0        | d !== a        | primeCtr <= 1   | 0         | 1               | primeCtr !==<br>  arrFind.length | 0     |
|   1   | 0        | d === d        | primeCtr <= 1   | 0         | 2               | primeCtr !==<br>  arrFind.length | 0     |
|   2   | 1        | s === s        | d !== s         | 0         | 3               | primeCtr !==<br>  arrFind.length | 0     |
|   3   | 2        | g === g        | d !== g         | 0         | 4               | primeCtr !==<br>  arrFind.length | 0     |
|   4   | 3        | w === w        | d !== w         | 0         | 5               | primeCtr !==<br>  arrFind.length | 0     |
|   5   | 4        | a === a        | d !== a         | 0         | 6               | primeCtr !==<br>  arrFind.length | 0     |
|   6   | 5        | d === d        | d === d         | 1         | 6               | primeCtr !==<br>  arrFind.length | 0     |
|   7   | 6        | s === s        | s === s         | 2         | 6               | primeCtr !==<br>  arrFind.length | 0     |
|   8   | 0        | x !== z        | x !== g         | 0         | 9               | primeCtr !==<br>  arrFind.length | 0     |
|   9   | 0        | d !== x        | primeCtr <= 1   | 0         | 10              | primeCtr !==<br>  arrFind.length | 0     |
|   10  | 0        | d === d        | primeCtr <= 1   | 0         | 11              | primeCtr !==<br>  arrFind.length | 0     |
|   11  | 1        | s === s        | d !== s         | 0         | 12              | primeCtr !==<br>  arrFind.length | 0     |
|   12  | 2        | g === g        | d !== g         | 0         | 13              | primeCtr !==<br>  arrFind.length | 0     |
|   13  | 3        | w === w        | d !== w         | 0         | 14              | primeCtr !==<br>  arrFind.length | 0     |
|   14  | 4        | a === a        | d !== a         | 0         | 15              | primeCtr !==<br>  arrFind.length | 0     |
|   15  | 5        | d === d        | d === d         | 1         | 15              | primeCtr !==<br>  arrFind.length | 0     |
|   16  | 6        | s === s        | s === s         | 2         | 15              | primeCtr !==<br>  arrFind.length | 0     |
|   17  | 7        | g === g        | g === g         | 3         | 15              | primeCtr !==<br>  arrFind.length | 0     |
|   18  | 8        | z === z        | z !== w         | 0         | 19              | primeCtr ===<br>  arrFind.length | 1     |


let arrSearch = search string // the long string
let arrFind = find string // the short string

So if you want to do this you can:
1. check to see if the current value of arrSearch (stpOneCounter) matches the current value of arrFind => if true stpOneCntr++; else stpOneCntr = stpTwoCntr
2. check if the current value arrSearch matches the first value of the find string => if true stpTwoCntr++; else set stpTwoCntr to 0 
3. if stpTwoCntr === arrFind.length then there is a match - set stpOneCounter = stpTwoCounter and do whatever the goal is(i.e. count the match, return the index, etc.)
