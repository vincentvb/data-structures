var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    //establish key/value pair 
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    if (count > 0) {
      //create deleteVar to store value to delete
      var deleteVar = storage[count];
      count--;
    }
    //return value during pop
    return storage[count];
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
