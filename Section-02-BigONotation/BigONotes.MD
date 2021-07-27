# Lesson 8

Much more efficient because there is no loop only 3 operations

Big O notation:
involves the worst case scenario

involves O(f(n))
an algotrithum is O(f(n)) if the number of simple operations the computer has to do is eventually less that a constant times f(n), as n increases
f(n) could be linear -> f(n) = n
f(n) could be quadratic => f(n) = n^2)
f(n) could be constant => f(n) = 1
//f(n) could be something entirely different!

AddUpToV1 has O(n) = loop performed on each value

AddUpToV2 has O(1) = single operation

# Lesson 9

// Big O notation notes:

// O(2n) = O(n)
// O(500) = O(1)
// O(13n^2) = O(n^2)
// O(n+10) = O(n)
// O(n+10) = O(n)
// O(1000n+50) = O(n)
// O(n^2 + 5n + 8) = O(n)
// O(n) = O(n^2)
//

// Big O Shorthands
// 1. Arithmetic operation are Constant
// 2. Variable assignment is constant
// 3. Accessing elements in an array with index or in object with key are constant
// 4. Loops increase the complexity by the number of iterations
// 5. Loops witin a loop exponentially increase the iterations.

# Lesson 10

// auxiliary space complexity = the space required by the algorithum not including the space taken up by the inputs

// Rules of thumb
// 1. Most primatives (booleans, numbers, undefined, null) are constant space
// 2. Strings require O9n) space (where n is the string length)
// 3. Reference types are geneally O(n), where n is the length (for arrays) or the number of keys (for objects)

# Lesson 11

log is inverse of exponetial = 1/10^x

two most common are log2(x) and log10(x)

we are going to ignore the the "base" using conceptual 

log2(8) = 
8 / 2 = 4
4 / 2 = 2
2 / 2 = 1
log2(8) = 3

log2(25) =
25 / 2 = 12.5
12.5 / 2 = 6.25
6.25 / 2 = 3.125
3.125 / 2 = 1.5625
1.5625 / 2 = 0.78125
 between 4 and 5 
log2(25) ~ 4.64

log(n) is very good => very close to O(1)

O(n*log(n)) is bad but not quite as bad as O(n^2)


# Recap
used to analyze the performance of an algorithum
gives a high level understanding of the time or space complexity of an algorithum
doesn't care about perceision only about general trends (linear [O(n)], quadratic [O(n^2), constant [O(1)]])
depends only on the algorithum, not the hardware used to run the algorithum
