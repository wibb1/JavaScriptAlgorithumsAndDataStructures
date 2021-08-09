# What makes something a data structure

- Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data.
- Different data structures excel at different things. Some are highly specialized, while others (like arrays) are more generally used.

# Why learn about data structures

- The more time you spend as a developer, the more likely you'll need to use one of these data structures
- You have already worked with many of them already, (i.e. the DOM is a tree data structure)
- Interviews, can you:
  - Reverse a singly linked list
  - Implement a priority que
  - Balance a binary tree

# ES2015 Class Syntax Overview

JavaScript does not really support classes however the class keyword was inserted in ES2015.

## MDN - Classes

JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaScript.

Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.

## Objectives

- Explain what a class is
- Understand how JavaScript implements the **idea** of classes
- Define terms like abstraction, encapsulation and polymorphism
- Use ES2015 classes to implement data structures

## What is a class

A blueprint for creating objects with predefined properties and methods. Our data structures will be implemented as classes.

# ES2015 Class Review

Syntax for class is important. To create a new instance of a class you use an assignment statement.

```javascript
let firstStudent = new Student("Tom", "Thumb");
```

The assignment statement triggers the constructor in the Student class.

```javascript
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
    this.scores = [];
  }
}
```

In the Student class above we feed 2 values (firstName, lastName) in when we create the class, which are assigned to the instance of the class through the constructor. The this keyword in the constructor is used to designate that this instance of the class is assigned the values.

# Class Instance Methods

To call a class function you use the class name followed by the function.

```javascript
firstStudent.fullName();
```

The above code calls the Student class method defined below to print out the Student class full name `Tom Thumb`

```javascript
fullName() {
  return `${firstName} ${lastName}`;
}
```

To add a late arrival to the student you would use

```javascript
firstStudent.markLate();
```

Which calls the following method.

```javascript
markLate() {
  this.tardies++;
  return `${firstName} ${lastName} has been late ${this.tardies} times.`;
}
```

To add a new score the following code would be used

```javascript
firstStudent.addScore(85);
```

to call the following method

```javascript
addScore(score){
  this.scores.push(score)
  return this.scores
}
```

and return `[ 85 ]`.

If we wanted to calculate the average for all the scores associated with a Student instance, we could include the following code.

```javascript
calculateAverage(){
  let sum = this.scores.reduce((a,b) => {return a + b;})
  return sum / this.scores.length
}
```

which we would call using the following

```javascript
firstStudent.calculateAverage();
```

and it would return `[ 85 ]` since there is only one value.

# Class Methods

Not used often. Defines methods or functionality that is pertinent to classes but not necessarily to individual instances of the class.

MDN The static keyword defines a static method for a class. Static methods are called without instantiating their class and **cannot** be called through a class instance. Static methods are often used to create utility functions for an application.

To calculate the a classes average you could feed an array of the students in the class to the classAverage class method below by using `Students.classAverage([student1, student2, etc.])`

```javascript
static classAverage(students){
  let numStudents = students.length;
  let sum = 0;
  for(let i=0; i<numStudents, i++){
    sum += students[i].calculateAverage();
  }
  return sum / numStudents
}
```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```
