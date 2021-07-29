### ===========================================
### Frequency Counters
### ===========================================
* This patern uses obects or stes to colect values or frequencies of values
* This can often avoid the need for nested loops or O(n^2) operations with arrays or strings
* Used when you are comparing or contrasting

#### Same = First Example
Write a function called **same**, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array.  The frequency of values must be the same.

##### Results
My refactor with objects is similar to his final solution I chose to create both objects then stringify them to compare while he iterated through them and compared.  This saves one loop but makes the code longer and more difficult to understand.

#### Anagrams = Second Example
Given two strings, write a function to determine if the second string is an anargram of the first.  Ana anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman

##### Results
My attempt 2 is slower than his and consumes more memory becasue I create 2 objects and compare them while he creates one and then cycles through the second string.  My code is a little cleaner because I am able to segment the creation of the objects.

