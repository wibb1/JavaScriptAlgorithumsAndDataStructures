# How to improve
1. devise a pln to solve the problems
2. master the common problem solving patterns

# Strategies
1. understand the problem
2. explore concrete examples
3. break it down
4. solve/simplify
5. look back and refactor

## Understanding the problem
Ask the following questions:
1. restate the problem in your own words
2. identify the inputs, their formats, and ask how to control invalid inforamtion
3. identify the outputs, and thier formats, how to handle errors 
4. do the available inputs provide the information neccessary to get the outputs (its OK to not not to be able to answer this but it is worth considering)
5. how should you label the data that are involved

 
================================================================
## Write a function which takes two numbers and returns their sum.
================================================================
1. restate the problem in your own words
  the function takes two values and returns the sum
2. identify the inputs, their formats, and ask how to control invalid inforamtion
  the two values to be summed, what are the maximum values, what are the controls required, are they going to be integers,  strings, floats, etc.
3. identify the outputs, and thier formats, how to handle errors 
  the sum is returned
4. do the available inputs provide the information neccessary to get the outputs (its OK to not not to be able to answer this but it is worth considering)
  yes since they are only requestion a function that accepts two variables
5. how should you label the data that are involved
  twoSum is the function and fistNumber and secondNumber are the variables


===================================================================
## Explore concrete examples
===================================================================
This is similar to <User Stories> or <Unit tests>

1. start with simple examples
2. progress to more concrete examples
3. explore examples with empty inputs
4. explore examples with invalid inputs


================================================================
## Write a function which takes in a string and returns 
## counts of each character in the string.
================================================================
1. restate the problem in your own words
  write a function that counts the number of a given character in a string
2. identify the inputs, their formats, and ask how to control invalid inforamtion
  the string and the character to be counted, what happens if the values are not strings or characters
3. identify the outputs
  the count of the character's occurance in the string
4. do the available inputs provide the information neccessary to get the outputs (its OK to not not to be able to answer this but it is worth considering)
  yes, except if the values passed are not the correct format
5. how should you label the data that are involved
  string for the string, character for the character, and total for the total count 

## Example 2

### simple examples
charCount("aaaa"); // {a:4})
charCount("hello"); //{h:1, e:1, l:2, o:1}

### complex examples
charCount("my phone number is 534-525-9076") // 
charCount("Hello hi") // 

### empty inputs
charCount("")

### invalid inputs
charCount(3)


## Break it down
1. write out the steps that you need to take - forces you to think about the code you'll write before you write it and helps catch any lingering conceptual issues or missunderstandings


===================================================================
## Simplify
===================================================================
1. Find the core difficulty in what you are trying to do
2. Temporarily ignor that difficulty
3. Write a simplified solution
4. Incoporate the difficulty back in

===================================================================
## Look Back and Refactor
===================================================================
1.  Can you check the result?
2.  Can you derive the result differently?
3.  Can you understand the code at a glance?
4.  Can you use the result or method for some other problem?
5.  Can you improve the performance of your solution?
6.  Can you think of toher ways to refactor?
7.  How have other people solved this problem?

===================================================================
# Recap
===================================================================

1. Understand the problem
2. Explore Concrete Examples
3. Break it down
4. Solve and simplify if needed
5. Look back and refactor