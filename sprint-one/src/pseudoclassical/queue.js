var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};

  //count
  this.count = 0;
  //addCount
  this.addCount = 0;

};

//.enqueue
Queue.prototype.enqueue = function (value) {
	this.count++;
	this.addCount++;
	this.storage[this.addCount] = value;
};

//.dequeue
Queue.prototype.dequeue = function () {
	if(this.count > 0) {
		this.count--;
	}
	for (var key in this.storage) {
		var dequeueVal = this.storage[key];
		delete this.storage[key];
		return dequeueVal;
	}
};
//.size
Queue.prototype.size = function () {
	return this.count;
};