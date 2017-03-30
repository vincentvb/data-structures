

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); //obj
};


//use LimitedArray's .set (this._storage.set(index, {k:v}))
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //if index equals undefined, create array and insert. otherwise push to current
  if (this._storage.get(index) === undefined) {
	  var objToInsert = {}; 
	  objToInsert[k] = v;
	  arrayToInsert = [objToInsert]

	  this._storage.set(index, arrayToInsert);
	}
  else {
  	var currentArray = this._storage.get(index); //array back [{'bob': 'l'}] 


  	for (var i=0; i<currentArray.length; i++){
	  	//check if currentArray contains k
	  	if (currentArray[i][k]){
	  		currentArray[i][k] = v;
	  	} else {
		  	var objToInsert = {}; 
		  	objToInsert[k] = v;
		  	currentArray.push(objToInsert);  		
	  	}
  	}
  }
};

//use LimitedArray's .get (this._storage.get(index))
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //use (this._storage.get(index)) to return [ {}, {}]
  var objReturned = this._storage.get(index);
  
  //if objReturned
  if (objReturned === undefined){
  	//return undefined
  	return undefined;
  } else {
  	//FOR loop objReturn
  	for (var i=0; i<objReturned.length; i++){
  		//IF objReturned[i][k]
  		if (objReturned[i][k]){
  			//return objReturned[i][k]
  			return objReturned[i][k];  	
  		}
  	}
  }

};

//use LimitedArray's set 
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //(this._storage.set(index, undefined))
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


