// Singly Linked List
class Animal {
  constructor(name)  {
    this.name = name;
    this.next = null;
  }
}

class SinglyLinked {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(animalName) {

  const animal = new Animal(animalName);

    if(this.size === 0) {
      this.head = animal;
      this.tail = animal;
    } else {
      this.tail.next = animal;
      this.tail = animal;
    }
    this.size++;
  }

  remove() {
    
      if (this.size === 0) {
        return null;
      } else if (this.size === 1) {
        let name = this.head.name;
        this.head = null;
        this.tail = null;
        this.size = 0;
        return name;
      } else if (this.size ===2) {
        let name = this.tail.name;
        this.tail = this.head;
        this.size--;
        return name;
      } else {
        let animal = this.head;
        let i = 1;
        do {
          animal = animal.next;
          console.log(`i: ${i} ... size ${this.size} .... animal ${animal.name}`);
          i++
        } while (this.size > 2 && i != this.size-1 )
        let name = animal.next.name;
        this.tail = animal;
        this.size--;
        return name;
      }
  }
}   
  
const sLl = new SinglyLinked();
sLl.add('monkey');
sLl.add('cat');
sLl.add('elephant');
sLl.add('macaw');
sLl.add('rat');

console.log(sLl.remove());
console.log(sLl.remove());
console.log(sLl.remove());
console.log(sLl.remove());
console.log(sLl.remove());
console.log(sLl.remove());


