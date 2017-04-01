var HashTable = function() {
  this._limit = 8
  this._storage = LimitedArray(this._limit);
  this._tuples = 0 
  this._resizeMode = false;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._tuples++;

  //****** NORMAL INSERT (no resizing) ******
  if (this._storage.get(index) === undefined) {
    var bucket = [[k,v]];
    this._storage.set(index, bucket);
  } else {
      var currentArray = this._storage.get(index); 

      for (var i=0; i<currentArray.length; i++){
        //check if any tuples contain the same key - if so replace exisiting value 
        if (currentArray[i][0] === k){
          currentArray[i] = [k, v];
        } else {
          tupal = [k, v];
          currentArray.push(tupal);     
        }
      }
    }    

  //****** IF >75% CAPACITY (RESIZE) ******
  if ((this._tuples / this._limit) > 0.75 && this._resizeMode === false) {
    this._resizeMode = true;

    //retrieve all tupals in the hashtable and push to storageVals
    var storageVals = [];
    var hashCopy = this;
    this._storage.each(function (bucket) {
      if (bucket !== undefined){
        for (var i = 0; i < bucket.length; i++) {
          storageVals.push([bucket[i][0], hashCopy.retrieve(bucket[i][0])]);
        }
      }
    });

    //clear hashTable
    this._storage.each(function(bucket) {
      if (bucket !== undefined){
        for (var i = 0; i < bucket.length; i++) {
          //save down bucket length to denote those w/ >1 tupal
          var bucketLength = bucket.length;
          //loop thru bucket length to remove ALL tupals
          for (var j = 0; j < bucketLength; j++) {
            hashCopy.remove(bucket[i][0]);
          }
        }
      }
    });

    //double limit. call LimitedArray to increase storage's limit.
    this._limit = this._limit * 2;
    this._storage = LimitedArray(this._limit);

    //push all tupals back into hashtable
    for (var i = 0; i < storageVals.length; i++) {
      this.insert(storageVals[i][0], storageVals[i][1]);
    }

    this._resizeMode = false;
  }

};


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  
  if (bucket === undefined) {
    return undefined;
  } else {
    for (var i=0; i<bucket.length; i++) {
      if (bucket[i][0] === k){
        return bucket[i][1];    
      }
    }
  }
};


HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._tuples--;
  
  //****** NORMAL REMOVE (no resizing) ******
  var bucket = this._storage.get(index);

  for (var i=0; i<bucket.length; i++){
    if (bucket[i][0] === k){
      bucket.splice(i,1);    
    }
  }
  this._storage.set(index, bucket);

  //****** IF <25% CAPACITY (RESIZE) ******
  if ((this._tuples / this._limit < 0.25) && (this._resizeMode === false)) {
    this._resizeMode = true;

    //retrieve all tupals in the hashtable and push to storageVals
    var storageVals = [];
    var hashCopy = this;
    this._storage.each(function (bucket) {
      if (bucket !== undefined){
        for (var i = 0; i < bucket.length; i++) {
          storageVals.push([bucket[i][0], hashCopy.retrieve(bucket[i][0])]);
        }
      }
    });
    
    //clear hashtable
    this._storage.each(function(bucket) {
      if (bucket !== undefined){
        for (var i = 0; i < bucket.length; i++) {
          //save down bucket length to denote those w/ >1 tupal
          bucketLength = bucket.length;
          //loop thru bucket length to remove ALL tupals
          for (var j = 0; j < bucketLength; j++) {
            hashCopy.remove(bucket[i][0]);
          }
        }
      }
    });

    //half limit. call LimitedArray to decrease storage's limit. 
    this._limit = this._limit / 2;
    this._storage = LimitedArray(this._limit);

    //push all tupals in storageVals into new decreased hashtable 
    for (var i = 0; i < storageVals.length; i++) {
      this.insert(storageVals[i][0], storageVals[i][1]);
    }

    this._resizeMode = false;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


