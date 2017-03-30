// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	this[node] = {};
	this[node]['edge'] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	if(this.hasOwnProperty(node)) {
		return true;
	}
	return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	for (var key in this) {
		var currentKey = this[key];
		if (currentKey['edge']){
			if (currentKey['edge'].includes(node)) {
				var index = currentKey['edge'].indexOf(node);
				currentKey['edge'].splice(index, 1); 
			}
		}
	}
	delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	if (this[fromNode]['edge'].indexOf(toNode) !== -1)
		return true;
	return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this[fromNode]['edge'].push(toNode);
	this[toNode]['edge'].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	//if edge exists
	if(this[fromNode]['edge'].indexOf(toNode) !== -1) {
		//remove edge from fromNode
		var index = this[fromNode]['edge'].indexOf(toNode);
		this[fromNode]['edge'].splice(index,1);
		//remove edge from toNode
		var index2 = this[toNode]['edge'].indexOf(fromNode);
		this[toNode]['edge'].splice(index2,1);		
	}
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	for (var key in this) {
		if (this.hasOwnProperty(key)){
			cb(key);		
		}
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


