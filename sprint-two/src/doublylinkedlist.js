var DoublyLinkedList = function(){

  var list = {};

  list.tail = null;
  list.head = null;

  list.addToTail = function(value){
    var newNode = list.createNode(value);
    var prevTail = this.tail
    var newTail;
  
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.previous = prevTail;
    }
  };

  list.removeHead = function(){
    var removedHead;
    var newHead;

    if (this.head !== null){
      removedHead = this.head.value;
      newHead = this.head.next
      this.head = newHead;

      if(newHead !== null){
        newHead.previous = null;
      }
    }
    return removedHead;
  };

  list.removeTail = function(){

    if (this.tail !== null){
      this.tail = this.tail.previous;
      this.tail.next = null;
    }

  };

  list.removeNode = function(value){

    var removedNode = this.find( value, function (node) {return node;} );

    if (removedNode.previous !== null){
      removedNode.previous.next = removedNode.next;
    }

    if (removedNode.next !== null) {
      removedNode.next.previous = removedNode.previous;
    }

  };

  list.contains = function(value){
    var foundValue = this.find( value, function (node) {return node.value;} );
    return foundValue === value;
  };

  list.find = function(value, iterator, node){

    var node = node || this.head;
   
    if (node.value === value){
      return iterator(node);
    } 
    
    if (node.next === null) {
        return undefined;
      } else {
        return this.find(value, iterator, node.next);
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

