var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods)

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){

  var node = Tree(value);

  this.children.push(node);

};

treeMethods.contains = function(target){

  var found = (this.value === target)

  _.each(this.children, function(child){
    if (found === false){
      found = child.contains(target);
    }
  });
  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
