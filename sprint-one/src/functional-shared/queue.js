var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  _.extend(obj, queueMethods);
  obj.data = {};
  obj.index_last = 0;
  obj.index_first = 0;

  return obj;
};
var queueMethods = {

  enqueue: function(value){
    this.data[this.index_last] = value;
    this.index_last++;
  },

  dequeue: function(){
    if(this.index_first < this.index_last){
      var value = this.data[this.index_first];
      delete this.data[this.index_first];
      this.index_first++;
      return value;
    }
  },
  size : function(){
    return this.index_last - this.index_first;
  }

};


