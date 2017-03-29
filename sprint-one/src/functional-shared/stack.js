var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //storage obj 
  var storage = {};
  //use extend to extend storage obj with stackMethods
  _.extend(storage, stackMethods);
  //storage count property to track count
  storage.count = 0;
  //return storage obj
  return storage;
};

var stackMethods = {};

//method to push
stackMethods.push = function (value) {
	//increment count
	this.count++;
	//set key/value - key is count
	this[this.count] = value;
};

//method to pop
stackMethods.pop = function () {
	//if count is greater than 0
	if (this.count > 0){
		//var deleteItem = key/value  - key is count
		var deleteItem = this[this.count];
		//decrease count
		this.count--;
	}
	//return deleteItem
	return deleteItem;
};

//method for size
stackMethods.size = function () {
	//return count
	return this.count;
};



