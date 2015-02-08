var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.counter = 0;
};

HashTable.prototype.insert = function(k, v){
  //[[ [k,v],[k,v] ],[ [k,v],[k,v],[k,v] ],[ [k,v] ],[]]
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k,v];
  if(this._storage[index] === undefined){
    this._storage[index] = [];
  }
  this._storage[index].push(tuple);
  this.counter++;

  if(this._limit * 0.75 <= this.counter){

    var oldHash = this._storage;

    this._limit = this._limit * 2;
    this._storage = LimitedArray(this._limit);
    this.counter = 0;

    for(var bucket = 0; bucket < oldHash.length; bucket++){
      for(var tuple = 0; tuple < oldHash[bucket].length; tuple++){
        this.insert(oldHash[bucket][0], oldHash[bucket][1]);
      }
    }

  }
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
  //----------------------
  this.counter--;

  if(this._limit * 0.25 > this.counter){

    var oldHash = this._storage;

    if(this._limit > 8){
      this._limit = this._limit / 2;
    }
    this._storage = LimitedArray(this._limit);
    this.counter = 0;

    for(var bucket = 0; bucket < oldHash.length; bucket++){
      for(var tuple = 0; tuple < oldHash[bucket].length; tuple++){
        this.insert(oldHash[bucket][0], oldHash[bucket][1]);
      }
    }

  }



};





/*
 * Complexity: What is the time complexity of the above functions?
 */
