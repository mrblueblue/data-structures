var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.data = {};
  this.index = 0;

};

Stack.prototype.push = function(value){
  this.index++;
  this.data[this.index] = value;

};

Stack.prototype.pop = function(){
  if(this.index != 0){
    var value = this.data[this.index];
    delete this.data[this.index];
    this.index--;
    return value;
  }
};
Stack.prototype.size = function(){
  return this.index;
};

