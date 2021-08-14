# Set
- Accepts a key and a value.
- Hashes the key
- Stores the key-value pair in the hash table array via separate chaining.

# Get
- Accepts a key and a value.
- Hashes the key
- Finds that index in our hash array
  - Loops through the inner array to find the key-value pair
  - Return undefined if the value is not there

# Keys
- Loops through the hash table array and returns an array of the keys in the table.
- How we handle duplicate values will be important. **Keys should be unique!**

# Values
- Loops through the hash table array and returns an array of the values in the table.
- How we handle duplicate values will be important. **Values should include all!**