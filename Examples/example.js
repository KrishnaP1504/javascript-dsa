//Problem:
//Implement a stack using JavaScript with basic operations like push(), pop(), peek(), and isEmpty().

class Stack {
    constructor() {
        this.items = [];
    }

    // Push element into stack
    push(element) {
        this.items.push(element);
    }

    // Pop element from stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // Peek top element of stack
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Check if stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Print stack elements
    printStack() {
        console.log(this.items.join(" "));
    }
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.printStack(); // Output: 10 20 30

console.log("Top element:", stack.peek()); // Output: 30
console.log("Popped element:", stack.pop()); // Output: 30
stack.printStack(); // Output: 10 20
