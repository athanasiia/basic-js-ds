const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = [];
  }
  push(element) {
    let array = new Array (this.stack.length + 1);

    if (this.stack.length === 0) {
      array[0] = element;
      this.stack = array;
      return;
    }

    this.stack.forEach((item, i) => {
      array[i] = item;
    })

    array[array.length - 1] = element;

    this.stack = array;
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}

module.exports = {
  Stack
};
