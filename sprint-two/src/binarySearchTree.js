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



/*
 * Complexity: What is the time complexity of the above functions?
 */
