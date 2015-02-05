


var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);

  obj.length = 0;
  obj.data = {};

  return obj;
};

var stackMethods = {};

stackMethods.pop = function (){

  if(this.length > 0) {
    var value = this.data[this.length];

    delete this.data[this.length];

    this.length--;

    return value;
  }
};

stackMethods.push = function(value){
  this.length++;
  this.data[this.length]=value;
};

stackMethods.size = function(){
  return this.length;
};
