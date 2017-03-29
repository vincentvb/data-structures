var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null; 

  list.addToTail = function(value) {
    if (list.head === null && list.tail === null) {
      //set head to Node(value)
      list.head = Node(value)
      //set tail to Node(value) 
      list.tail = Node(value)
    }

    if (list.head && list.tail){
      //set list.head.next to Node(value)
      list.head.next = Node(value);
      //reassign list.tail as Node(value)
      list.tail = Node(value);
    }
  };

  list.removeHead = function() {
    if (list.head){
      var curHead = list.head;
      //set var newHead = list.head.next
      var newHead = list.head.next;
      console.log(newHead);

      //list.head = newHead
      list.head = newHead;

      return curHead.value;      
    }
  };

  list.contains = function(target) {
    if (list.head.value === target || list.tail.value === target) {
      return true;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
