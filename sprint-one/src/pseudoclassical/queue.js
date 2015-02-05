var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.data = {};
  this.indexLast = 0;
  this.indexFirst = 0;

};

Queue.prototype.enqueue = function(value){
  this.data[this.indexLast] = value;
  this.indexLast++;
}
Queue.prototype.dequeue = function(){
  if(this.indexFirst < this.indexLast){
    var value = this.data[this.indexFirst];
    delete this.data[this.indexFirst];
    this.indexFirst++;
    return value;
  }
}
Queue.prototype.size = function(){
  return this.indexLast - this.indexFirst;
}


