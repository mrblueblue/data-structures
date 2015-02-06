var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    (list.head === null) ? list.head = node : list.tail.next = node;
    list.tail = node;
  };

  list.removeHead = function(){
    var value = list.head.value;
    list.head = list.head.next;
    return value;
  };

  list.contains = function(target, node, found){

    if (typeof node === 'undefined'){
      node = list.head;
      found = false;
    }

    if (node.value === target){
      found = true
    }
    if (node.next !== null){
      found = list.contains(target, node.next, found);
    }

    return found;

  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
