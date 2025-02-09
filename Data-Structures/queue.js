/**
 * A Queue class implementing a First-In-First-Out (FIFO) data structure.
 * Elements are added to the back and removed from the front of the queue.
 */
class Queue {
    /**
     * Initialize an empty queue using an array as the underlying storage.
     */
    constructor() {
        this.items = [];
    }

    /**
     * Adds an element to the back of the queue.
     * @param {*} element - The element to add to the queue
     */
    enqueue(element) {
        this.items.push(element);
    }

    /**
     * Removes and returns the front element from the queue.
     * @returns {*} The front element or "Underflow" if queue is empty
     */
    dequeue() {
        if (this.isEmpty()) return "Underflow";
        return this.items.shift();
    }

    /**
     * Returns the front element without removing it.
     * @returns {*} The front element or message if queue is empty
     */
    front() {
        return this.isEmpty() ? "Queue is empty" : this.items[0];
    }

    /**
     * Checks if the queue is empty.
     * @returns {boolean} True if queue is empty, false otherwise
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * Prints the queue elements from front to back.
     */
    printQueue() {
        console.log(this.items.join(" -> "));
    }
}

// Example Usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.printQueue(); // Output: 1 -> 2 -> 3
queue.dequeue();
queue.printQueue(); // Output: 2 -> 3

