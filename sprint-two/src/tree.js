var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree,treeMethods);

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	var newChildObj = Tree(value); 
	this.children.push(newChildObj);
};

treeMethods.contains = function(target) {
	//IF target is equal this.value
	if (target === this.value){
		//return true
		return true;
	}

	//RECURSIVE CASE
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

	//return false
	return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
