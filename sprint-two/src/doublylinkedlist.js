var DoublyLinkedList = function(){

  var list = {};

  list.tail = null;
  list.head = null;

  list.addToTail = function(value){
    var newNode = list.createNode(value);
    // first add
    if (this.head === null) {

      this.head = newNode;
      this.tail = newNode;

    }
    // additional adds
    else {

      var prevTail = this.tail;

      this.tail.next = newNode;
      this.tail = newNode;

      this.tail.previous = prevTail;

    }
  };

  list.removeHead = function(){
    var returnedValue;
    if (this.head !== null){
      returnedValue = this.head.value;
      this.head = this.head.next;
      if(this.head !== null){
        this.head.previous = null;
      }
    }
    return returnedValue;
  };

  list.removeTail = function(){

    if (this.tail !== null){
      this.tail = this.tail.previous;
      this.tail.next = null;
    }

  };

  list.remove = function(value){

    var result = this.find(value, function(node){return node;});

    if (result.previous !== null){
      result.previous.next = result.next;
    }

    if (result.next !== null) {
      result.next.previous = result.previous;
    }

  };

  list.contains = function(value){
    var result = this.find(value,function(node){ return node.value;});


    if(result === value){
      return true;
    }
    else{
      return false;
    }

  };

  list.find = function(value, iterator, node){

    node = node || this.head;

    if (node.value === value){
      return (iterator(node));
    } else {
      if (node.next === null){
        return undefined;
      }
      return (this.find(value, iterator, node.next));
    }

  };

  list.createNode = function(value){
    var node = {};
    node.value = value;
    node.next = null;
    node.previous = null;
    return node;
  };


  return list;
};

