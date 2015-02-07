var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  //[[ [k,v],[k,v] ],[ [k,v],[k,v],[k,v] ],[ [k,v] ],[]]
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k,v];
  if(this._storage[index] === undefined){
    this._storage[index] = [];
  }
  this._storage[index].push(tuple);

};

HashTable.prototype.retrieve = function(k){
  var index = getIndexBelowMaxForKey(k, this._limit);
  var returnedValue = null;
  if(this._storage[index] === undefined){
    return returnedValue;
  }
  _.each(this._storage[index], function(item){
    if(item[0] === k){
      returnedValue = item[1];
    }
  });
  return returnedValue;
};

HashTable.prototype.remove = function(k){

  var index = getIndexBelowMaxForKey(k,this._limit);
  this._storage[index] = null;
  _.each(this._storage[index], function(item){
    if(item[0] === k){
      this._storage.splice(index,1);
    }
  });
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
