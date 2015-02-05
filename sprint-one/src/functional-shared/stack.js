var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.length = 0;
  obj.data = {};
  _.extend(obj,stackMethods);
  return obj;
};

var stackMethods = {
  pop : function(){
    if(this.length > 0){
      var poped = this.data[this.length];
      delete this.data[this.length];
      this.length--;
      return poped;
    }
  },
  push : function(value){
    this.length++;
    this.data[this.length] = value;
  },
  size : function(){
    //debugger;
    return this.length;
  }
};


