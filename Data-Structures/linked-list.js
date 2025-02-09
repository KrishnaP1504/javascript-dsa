/**
 * Node class represents each element in the linked list.
 * Each node contains a value and a reference to the next node.
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * LinkedList class implements a singly linked list data structure.
 * Elements are connected in a sequential manner where each element
 * points to the next element in the sequence.
 */
class LinkedList {
    /**
     * Initialize an empty linked list
     */
    constructor() {
        this.head = null;
    }

    /**
     * Inserts a new value at the end of the linked list
     * @param {*} value - The value to insert
     */
    insert(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
    }

    /**
     * Deletes the first occurrence of a value in the linked list
     * @param {*} value - The value to delete
     */
    delete(value) {
        if (!this.head) return;
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        let temp = this.head;
        while (temp.next && temp.next.value !== value) {
            temp = temp.next;
        }
        if (temp.next) {
            temp.next = temp.next.next;
        }
    }

    /**
     * Prints the linked list in the format: value1 -> value2 -> ... -> null
     */
    printList() {
        let temp = this.head;
        let list = "";
        while (temp) {
            list += temp.value + " -> ";
            temp = temp.next;
        }
        console.log(list + "null");
    }
}

// Example Usage
const linkedList = new LinkedList();
linkedList.insert(10);
linkedList.insert(20);
linkedList.insert(30);
linkedList.printList(); // Output: 10 -> 20 -> 30 -> null
linkedList.delete(20);
linkedList.printList(); // Output: 10 -> 30 -> null

