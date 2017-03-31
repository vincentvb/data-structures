var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null; 

  list.addToHead = function(value) {
    var newNode = Node(value)
    //if list.head is null && list.tail is null
    if (list.head === null && list.tail === null) {
        list.head = newNode;
        list.tail = newNode;
      //set list.head to newNode && list.tail to newNode
    }
    //if list.head exists assign
    if (list.head !== null) {
      list.head.prev = newNode;
      newNode.next = list.head;
      list.head = newNode;
      //assign previous head .previous to newNode
      //assign list.head to newNode and set newNode.next to previous head node
    }
  };

  list.addToTail = function(value) {
    var newNode = Node(value);
    //if list.head is null && list.tail is null
    if (list.head === null && list.tail === null) {
      //set list.head && list.tail to newNode
      list.head = newNode;
      list.tail = newNode;
    }
    //if list.tail exists
    if (list.tail !== null) {
      //assign previous tail .next to newNode
      list.tail.next = newNode;
      //assign list.tail to newNode and set newNode.previous to previous tail node
      newNode.prev = list.tail;
      list.tail = newNode;
    }
  };
  
  list.removeHead = function() {
    var oldHead = list.head;
    var newHead = list.head.next;
    newHead.prev = null;
    list.head = newHead;
    return oldHead.value;
  };

  list.removeTail = function() {
    var oldTail = list.tail;
    var newTail = list.tail.prev;
    newTail.next = null;
    list.tail = newTail
    return oldTail.value;
  };

  list.contains = function(target, currentNode) {
    var currentNode = currentNode || list.head;
    if (currentNode.value === target) {
      return true;
    }
    else if (currentNode.next === null) {
      return false;
    }
    else {
      return list.contains(target, currentNode.next);
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
