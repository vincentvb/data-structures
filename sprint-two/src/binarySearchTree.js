var BinarySearchTree = function(value) {
	this.value = value;
	this.left = null;
	this.right = null;
};


BinarySearchTree.prototype.insert = function (value) { 
	//compare newNode to parent's value (this.value) 
	//if < parent's value 
	if (value < this.value) {
		//this.left === null  
		if (this.left === null){
			//set to newNode
			this.left = new BinarySearchTree(value);
		}
		//this.left is defined 
		if (value !== null){
			//recursively call ____.insert(value);
			this.left.insert(value);
		}
	}

	//if > parent's value 
	if (value > this.value) {
		//this.right === null  
		if (this.right === null){
			//set to newNode
      this.right = new BinarySearchTree(value);
    }
    //this.right is defined 
    if (this.right !== null){
      //recursively call ____.insert(value);
      this.right.insert(value);
    }
  }
};
    
BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value){
    return true;
  }

  //if < parent's value   
  if (value < this.value && this.left !== null) {
      return this.left.contains(value);
  }

  //if > parent's value 
  if (value > this.value && this.right !== null) {
      return this.right.contains(value);
  }

  return false;
};

BinarySearchTree.prototype.depthFirstLog = function (cb) {
  cb(this.value)  //push 5

  //if this.left exists
  if (this.left !==null){
    //__this.left____.depthFirstLog(cb)  //push 2
    this.left.depthFirstLog(cb);
  }

  // if this.right exists
  if (this.right !== null) {
    //__this.right__.detphFirstLog(cb)  //push 7
    this.right.depthFirstLog(cb);   
  }
};


//created obj in global scope - outside of binarySearchTree
var obj = {};

BinarySearchTree.prototype.breadthFirstlog = function(cb) {
	
  this.bflHelper();
	var array = []
	
  for (var key in obj) {
		array = array.concat(obj[key])
	}

	for (var i=0; i<array.length; i++){
		cb(array[i]);
	}
}


BinarySearchTree.prototype.bflHelper = function(counter) {

	counter = counter || 0;
	
	//CASE FOR leaves
	if (this.left === null && this.right === null){
		//if tree is at end and tier already exists in tier object add to tier's object array
		if (obj[counter]) {
			obj[counter].push(this.value)
		//if tree is at end and tier doesn't exist in tier object, create tier array in object
    } else {
	    obj[counter] = [this.value];
    }
	}

	if (this.left) {
		if (!obj[counter]) {
			obj[counter] = [this.value];
			this.left.bflHelper(counter + 1);
		} else {
			if (obj[counter].indexOf(this.value) !== -1) {
				this.left.bflHelper(counter + 1);
			} else {
				obj[counter].push(this.value)
				this.left.bflHelper(counter + 1);
			}
		}
	}

	if (this.right) {
		if (!obj[counter]) {
			obj[counter] = [this.value];
			this.right.bflHelper(counter + 1);
		} else {
			if (obj[counter].indexOf(this.value) !== -1) {
				this.right.bflHelper(counter + 1);
			} else {
				obj[counter].push(this.value)
				this.right.bflHelper(counter + 1);
			}
	 }
	}
}



/*
 * Complexity: What is the time complexity of the above functions?
 */
