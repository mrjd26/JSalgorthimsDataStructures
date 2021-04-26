// Binary Search

const num = [23, 50, 45, 60, 70, 10,4,0,7,23]

  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null ;
    }
  }

  class BST {
    constructor(){
    this.root = null;
  }

  createNode(x) {
    const newNode = new Node(x);
    this.placeNode(newNode, this.root);
  }

  placeNode(newNode, currentNode) {  
    if (!this.root) {
       this.root = newNode;
       return this;
    } else if (newNode.value <= currentNode.value) {
       if (currentNode.left === null) {
       currentNode.left = newNode;
       } else {
	 this.placeNode(newNode, currentNode.left);				       }
    } else if (newNode.value > currentNode.value) { 
       if (currentNode.right === null) {
         currentNode.right = newNode;
       } else {
	 // LO AND BEHOLD !! THE RECURSION !!
         this.placeNode(newNode, currentNode.right);
       }
     }
   }
  } // end object

  let tree = new BST();

  for (i=0; i<num.length; i++) {
    tree.createNode(num[i]);
  }

  console.log(tree);
