var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};

  //extend (obj, queueMethods)
  _.extend(obj, queueMethods);

  //count
  obj.count = 0;
  //addCount
  obj.addCount = 0;

  return obj;
};

var queueMethods = {};

//queueMethods.enqueue
queueMethods.enqueue = function (value) {
	this.count++;
	this.addCount++;
	this.storage[this.addCount] = value;
};

//queueMethods.dequeue
queueMethods.dequeue = function () {
	if(this.count > 0) {
		this.count--;
	}
	for (var key in this.storage) {
		var dequeueVal = this.storage[key];
		delete this.storage[key];
		return dequeueVal;
	}
};
//queueMethods.size
queueMethods.size = function () {
	return this.count;
};