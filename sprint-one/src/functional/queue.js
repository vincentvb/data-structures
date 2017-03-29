var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  //var addCount 
  var addCount = 0;
  //var deleteCount
  var deleteCount = 0;


  // Implement the methods below

  someInstance.enqueue = function(value) {
    debugger;
    //increase count when called
    count++;
    //increase addCount
    addCount++;
    //add key/value to storage - key is addcount
    storage[addCount] = value; 
  };

  someInstance.dequeue = function() {
    //if count is > 0
    if (count > 0){
      //add to deleteCount
      deleteCount++;
      //decrease count when called    
      count--;
    }
    //return deleteCount when dequeue
    return storage[deleteCount];
  };

  someInstance.size = function() {
    //return count
    return count;
  };

  return someInstance;
};
