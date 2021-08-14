# Hash Table/Maps
Most languages have a default type with this.

# Objectives
- Explain what a hash table is.
- Define what a hashing algorithm is.
- Discuss what makes a good hashing algorithm.
- Understand how collisions occur in a hash table.
- Handle collisions using separate chaining or linear probing.

# What is a hash table
- Hash tables are used to store key-value pairs
- They are like arrays, but unlike arrays the keys (index in the case of arrays) are not ordered.
- Unlike arrays, hash tables are *fast* for all of the following operations: finding values, adding new values, and removing values!

# Why is this important?
- Nearly every programing language has some sort of hash table data structure.
- Because of their speed, hash tables are very commonly used.

# Hash Tables in Various Languages (Hash Tables by any Other Name)
1. Ruby has Hashes
2. JS has Objects`*` and Maps
3. Java, Go, & Scala have Maps
4. Python has Dictionaries

`*` JS Objects have some restrictions (only allowed to use strings as keys), but are basically hash tables.

# Hash Tables

Imagine we want to store some colors 
We could just use an array/list:
`[ "#ff69b4", "#ff4500", #00ffff" ]`
Not super readable! What do these colors correspond to?

Would be nice if we could use the colors name instead.
```
pink -------> #ff69b4
orange-red -> #ff4500
cyan -------> #00ffff
```
In a hash table you call colors['cyan'] rather han in an array colors[2].

In this section we are going to construct our own hash-maps from scratch to get a better understanding of how they work and the code behind what they do.

# Introductory Example
- To implement a hash table, we'll be using an array.
- In order to look up values by keys, we need a way to **convert keys into valid array indices**.
- A function that performs this task is called a ***hash function***.

Hashing Conceptually
---------------------------------------------
|0|1|2|3|4|5|6|7|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|['pink',<br>'#ff69b4]|['orange',<br>'##ffa500']|['yellow',<br>'#FFFF00']|['cyan,<br>'#00ffff]|['green'<br>'00ff00']|['blue',<br>'#0000ff']|['red',<br>'#ff0000]|['purple',<br>'#8000ff']

# What makes a good hash function?
*(not a cryptographically secure one)*
1. Fast (i.e. constant time)
2. Doesn't cluster outputs at specific indices, but distributes uniformly.
3. Deterministic (same input yields same output)

# hash1 method (see 00-HashTable.js)
A few problems:
--------------
1. We only can hash strings - not going to address this - we are going to limit our keys to strings

2. Not constant time - linear in key length

3. Could be a little more scattered - high likelihood of data collisions

# hash2 method (see 00-HashTable.js)
Is a very slight improvement over the previous has function by doing two things.

1. Sets a maximum for the number of characters that are used at 100.  If the string gets too long it won't use all the characters.

2. It uses a prime number multiplication - which is common to most hash functions - to help eliminate data collisions - data being stored in the same bucket.

3. Should use a prime number as the array length because using a prime reduces the collisions

# dealing with collisions
Even with large arrays and great hash functions, collisions are inevitable.

There are many strategies for dealing with collisions, but we'll focus on two:
1. **Separate Chaining** - at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list)

| 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|   |   |   |   |`*`|   |   |

`*` [ [ 'darkblue', '#00008b' ] ],
    [ 'salmon', '#fa8072' ] ]

darkblue ----> 4
salmon ------> 4

-------------------
2. **Linear Probing** - when we find a collision, we search through the array to find the next empty slot.

| 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|   |   |   |   |(1)|(2)|(3)|

  1. [ 'darkblue', '#00008b' ]
  2. [ 'salmon', '#fa8072' ]
  3. [ 'tomato', '#ff6347' ]

# We are going to use **Separate Chaining**

# Time complexity of Hash Tables
*(average case)*
- Insert: O(1)
- Delete: O(1)
- Access: O(1)