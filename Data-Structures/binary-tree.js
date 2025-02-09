/**
 * Node class represents each node in the binary tree.
 * Each node contains a value and references to left and right child nodes.
 */
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * BinaryTree class implements a binary search tree data structure.
 * Values are ordered such that for each node:
 * - Left subtree contains only nodes with values less than the node's value
 * - Right subtree contains only nodes with values greater than the node's value
 */
class BinaryTree {
    /**
     * Initialize an empty binary tree
     */
    constructor() {
        this.root = null;
    }

    /**
     * Inserts a new value into the binary search tree
     * @param {*} value - The value to insert
     */
    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    /**
     * Helper method to recursively insert a node in the correct position
     * @param {Node} root - The root of the current subtree
     * @param {Node} newNode - The new node to insert
     */
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (!root.left) root.left = newNode;
            else this.insertNode(root.left, newNode);
        } else {
            if (!root.right) root.right = newNode;
            else this.insertNode(root.right, newNode);
        }
    }

    /**
     * Performs an inorder traversal of the tree (left-root-right)
     * @param {Node} root - The root node to start traversal from
     */
    inorder(root = this.root) {
        if (root) {
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right);
        }
    }
}

// Example Usage
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.inorder(); // Output: 3 5 7 10 15

