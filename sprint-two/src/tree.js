var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree,treeMethods);

  // your code here
  newTree.children = [];  // fix me
  newTree.parent = null;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	var newChildObj = Tree(value); 
  newChildObj.parent = this;
	this.children.push(newChildObj);

};

treeMethods.contains = function(target) {
	//IF target is equal this.value
	if (target === this.value){
		//return true
		return true;
	}

	//if this.children.length is > 0
	if (this.children.length > 0) {
		//FOR loop thru its
		for (var i=0; i < this.children.length; i++){
			//recursively calling on the children[i].contains(target)
			if (this.children[i].contains(target)) {
				return true;
			};
		}	
	}
	return false;
};

treeMethods.traverse = function(cb) {
	if (this.value !== undefined){
		//execute cb on current node 
		cb(this);
	}

	//if current node has children
	if (this.children.length > 0 ){
		//FOR loop thru children array
		for (var i=0; i<this.children.length; i++){
			//recursively call cb on children[i]	
			this.children[i].traverse(cb);
		}
	}
};

treeMethods.removeFromParent = function(value) {
  var finalResult = null;

  //if tree is found
	if (this.value === value){
		var removeVal = this;
		//save tree.parent as variable
		var removeValParent = removeVal.parent;

		//splice tree from it's parent's child array - loop thru parent array 
		for (var i=0; i<removeValParent.children.length; i++){
			//splice at index 
			if (removeValParent.children[i].value === value){
				removeValParent.children.splice(i,1);
			}
		}

		finalResult = removeVal.value; 		
	}

  //traverse to find where tree is
  if (this.children.length > 0 ){
    for (var i=0; i<this.children.length; i++){
      this.children[i].removeFromParent(value);
    }
  }  

  return finalResult;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
