

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); 
};


//use LimitedArray's .set (this._storage.set(index, {k:v}))
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //if index equals undefined, create array and insert. otherwise push to current
  if (this._storage.get(index) === undefined) {
	  var tupal = [k,v]; 
	  var bucket = [tupal];

	  this._storage.set(index, bucket);
	}
  else {
  	var currentArray = this._storage.get(index); 


  	for (var i=0; i<currentArray.length; i++){
	  	//check if currentArray contains k
	  	if (currentArray[i][0] === k){
	  		currentArray[i] = [k, v];
	  	} else {
		  	tupal = [k, v];
		  	currentArray.push(tupal);  		
	  	}
  	}
  }
};

//use LimitedArray's .get (this._storage.get(index))
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //use (this._storage.get(index)) to return [ [], []]
  var bucket = this._storage.get(index);
  
  //if bucket is undefined
  if (bucket === undefined){
  	return undefined;
  } else {
  	for (var i=0; i<bucket.length; i++){
  		if (bucket[i][0] === k){
  			return bucket[i][1];  	
  		}
  	}
  }

};

//use LimitedArray's get and set 
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //use (this._storage.get(index)) to return [ [k,v], [k,v]]
  var bucket = this._storage.get(index);

  for (var i=0; i<bucket.length; i++){
    if (bucket[i][0] === k){
      bucket.splice(i,1);    
    }
  }
  this._storage.set(index, bucket)
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


