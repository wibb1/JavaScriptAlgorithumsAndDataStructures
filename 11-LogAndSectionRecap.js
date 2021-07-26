// log is inverse of exponetial = 1/10^x

// two most common are log2(x) and log10(x)

// we are going to ignore the the "base" using conceptual 

// log2(8) = 
// 8 / 2 = 4
// 4 / 2 = 2
// 2 / 2 = 1
// log2(8) = 3

// log2(25) =
// 25 / 2 = 12.5
// 12.5 / 2 = 6.25
// 6.25 / 2 = 3.125
// 3.125 / 2 = 1.5625
// 1.5625 / 2 = 0.78125
//  between 4 and 5 
// log2(25) ~ 4.64

// log(n) is very good => very close to O(1)

// O(n*log(n)) is bad but not quite as bad as O(n^2)


// Recap
// used to analyze the performance of an algorithum
// gives a high level understanding of the time or space complexity of an algorithum
// doesn't care about perceision only about general trends (linear [O(n)], quadratic [O(n^2), constant [O(1)]])
// depends only on the algorithum, not the hardware used to run the algorithum
