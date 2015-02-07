

var Graph = function(){

  this.nodes = [];

};

Graph.prototype.addNode = function(node){

  this.nodes.push({
      value: node,
      edges: []
   });
};

Graph.prototype.contains = function(node){

  var found = false;
  _.each(this.nodes, function(item){
    if (item.value === node){
      found = true;
    }
  });
  return found;
};

Graph.prototype.removeNode = function(node){
  var that = this;
  _.each(this.nodes,function(item,index){
    if(item.value === node){
      that.nodes.splice(index,1);
    }
  });
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var indexFrom = this.getIndex(fromNode);
  if( _.contains(this.nodes[indexFrom].edges, toNode) ){
    return true;
  }
  return false;
};

Graph.prototype.getIndex = function(node){
  var index;
  _.each(this.nodes, function(item, itemIndex){
    if(item.value === node){
      index = itemIndex;
    }
  });
  return index;
};

Graph.prototype.addEdge = function(fromNode, toNode){

  var indexFrom = this.getIndex(fromNode);
  var indexTo = this.getIndex(toNode);
  this.nodes[indexFrom].edges.push(this.nodes[indexTo].value);
  this.nodes[indexTo].edges.push(this.nodes[indexFrom].value);

};

Graph.prototype.removeEdge = function(fromNode, toNode){

  var indexFrom = this.getIndex(fromNode);
  var indexTo = this.getIndex(toNode);
  var edgeFrom = this.nodes[indexFrom].edges;
  var edgeTo = this.nodes[indexTo].edges;

  edgeFrom.splice(edgeFrom.indexOf(toNode, 1));
  edgeTo.splice(edgeTo.indexOf(fromNode, 1));

};

Graph.prototype.forEachNode = function(cb){

  _.each(this.nodes,function(item){
    cb(item.value)
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



