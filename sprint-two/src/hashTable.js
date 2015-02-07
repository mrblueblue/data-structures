var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){

  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k,v];
  var buckets = this._storage

  if(buckets[i] === undefined){
    buckets[i] = [];
  }

  buckets[i].push(tuple);
};

HashTable.prototype.retrieve = function(k){

  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage;
  var emptyBucket = bucket[i] === null
  var retrieved;

  if(emptyBucket){
    return null;
  }

  _.each(bucket[i], function(tuple){
    if(tuple[0] === k){
      retrieved = tuple[1];
      return retrieved
    }
  });

  return retrieved;
};

HashTable.prototype.remove = function(k){

  var i = getIndexBelowMaxForKey(k,this._limit);
  var bucket = this._storage

  bucket[i] = null;
  
  _.each(this._storage[i], function(item){
    if(item[0] === k){
      this._storage.splice(i,1);
    }
  });
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
