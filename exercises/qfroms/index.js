// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.first = new Stack();
    this.last = new Stack();
  }
  add(record) {
    this.first.push(record);
  }
  remove() {
    while (this.first.peek()) {
      this.last.push(this.first.pop());
    }
    const record = this.last.pop();
    while (this.last.peek()) {
      this.first.push(this.last.pop());
    }
    return record;
  }
  peek() {
    while (this.first.peek()) {
      this.last.push(this.first.pop());
    }
    const record = this.last.peek();
    while (this.last.peek()) {
      this.first.push(this.last.pop());
    }
    return record;
  }
}

module.exports = Queue;
