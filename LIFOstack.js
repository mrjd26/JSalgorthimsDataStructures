//Stack (lifo) implementation
class Stack {
    constructor(head) {
      this.head = null;
    }

  add(thing) {
      let node = new Node(thing);

      if (this.head === null) {
          this.head = node;
      } else {
          node.next = this.head;
          this.head = node;
      }
    }

  remove() {
    if (this.head ===null) {
        return undefined;
    } else {
        this.head = this.head.next;
    }
  }
}
class Node {
    constructor(thing) {
        this.name = thing;
        this.next = undefined;
    }
}

let queue = new Stack();

/* uncomment 2 test

queue.add('bananas');
queue.add('mangoes');
queue.add('pears');

queue.remove();

console.log(queue.head.next);

*/
