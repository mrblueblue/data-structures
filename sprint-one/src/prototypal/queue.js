var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //
  var obj = Object.create(queueMethods);

  obj.data = {};
  obj.indexFirst = 0;
  obj.indexLast = 0;

  return obj;

};

var queueMethods = {};

queueMethods.enqueue = function(value){

  this.data[this.indexLast]=value;
  this.indexLast++;

};

queueMethods.dequeue = function(){

  if (this.indexFirst < this.indexLast){
    var value = this.data[this.indexFirst];

    delete this.data[this.indexFirst];
    this.indexFirst++;
    return value;
  }

};

queueMethods.size = function(){
  return this.indexLast - this.indexFirst;
};

