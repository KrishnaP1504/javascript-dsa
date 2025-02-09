/**
 * Stack data structure implementation using an array
 * Follows Last-In-First-Out (LIFO) principle
 */
class Stack {
    /**
     * Initialize empty stack
     */
    constructor() {
      this.items = [];
    }
  
    /**
     * Add an element to the top of the stack
     * @param {*} element - The element to be pushed onto the stack
     */
    push(element) {
      this.items.push(element);
    }
  
    /**
     * Remove and return the top element from the stack
     * @returns {*} The removed element or "Underflow" if stack is empty
     */
    pop() {
      if (this.isEmpty()) return "Underflow";
      return this.items.pop();
    }
  
    /**
     * View the top element of the stack without removing it
     * @returns {*} The top element of the stack
     */
    peek() {
      return this.items[this.items.length - 1];
    }
  
    /**
     * Check if the stack is empty
     * @returns {boolean} True if stack is empty, false otherwise
     */
    isEmpty() {
      return this.items.length === 0;
    }
  
    /**
     * Print all elements in the stack
     */
    printStack() {
      console.log(this.items.join(" "));
    }
  }
  
  // Example Usage
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  stack.printStack(); // Output: 10 20 30   
  stack.pop();
stack.printStack(); // Output: 10 -> 20