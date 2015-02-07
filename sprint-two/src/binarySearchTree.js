var BinarySearchTree = function(value){

  var binaryTree = {};

  binaryTree.left = null;
  binaryTree.right = null;
  binaryTree.value = value;

  _.extend(binaryTree, binaryTreeMethods);
  return binaryTree;

};

var binaryTreeMethods ={};

binaryTreeMethods.insert = function(value) {

  if (value < this.value){

    if (this.left === null) {
      this.left =  BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }

  } else {

    if (this.right === null) {
      this.right =  BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }

  }

};

binaryTreeMethods.contains = function(value) {

  if (this.value === value){
    return true;
  }

  if (this.value < value){

    if (this.right !== null){
      return this.right.contains(value);
    }else{
      return false;
    }
  }
  if(this.left !== null){
    return this.left.contains(value);
  }else{
    return false;
  }
};

binaryTreeMethods.depthFirstLog = function(callback) {

  callback(this.value);

  if (this.left !== null){
    this.left.depthFirstLog(callback);
  }

  if (this.right !== null){
    this.right.depthFirstLog(callback);
  }
  // body...
};
