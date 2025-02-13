/**
 * Binary Search Algorithm (Iterative)
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * Note: Array must be sorted before using binary search
 * @param {Array} arr - The sorted array to search through
 * @param {*} target - The value to find
 * @returns {number} - Returns the index of target if found, -1 otherwise
 */
function binarySearch(arr, target) {
    // Initialize left and right pointers
    let left = 0;
    let right = arr.length - 1;

    // Continue searching while left pointer is less than or equal to right
    while (left <= right) {
        // Calculate middle index
        const mid = Math.floor((left + right) / 2);

        // If target is found at middle, return the index
        if (arr[mid] === target) {
            return mid;
        }

        // If target is greater, ignore left half
        if (arr[mid] < target) {
            left = mid + 1;
        }
        // If target is smaller, ignore right half
        else {
            right = mid - 1;
        }
    }

    // Target not found
    return -1;
}

/**
 * Binary Search Algorithm (Recursive)
 * Time Complexity: O(log n)
 * Space Complexity: O(log n) due to recursive call stack
 * @param {Array} arr - The sorted array to search through
 * @param {*} target - The value to find
 * @param {number} left - Left boundary index
 * @param {number} right - Right boundary index
 * @returns {number} - Returns the index of target if found, -1 otherwise
 */
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    // Base case: if left pointer exceeds right pointer
    if (left > right) {
        return -1;
    }

    // Calculate middle index
    const mid = Math.floor((left + right) / 2);

    // If target is found at middle, return the index
    if (arr[mid] === target) {
        return mid;
    }

    // If target is greater, search right half
    if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right);
    }
    // If target is smaller, search left half
    return binarySearchRecursive(arr, target, left, mid - 1);
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Iterative binary search
console.log(binarySearch(sortedArray, 7));     // Output: 6
console.log(binarySearch(sortedArray, 11));    // Output: -1

// Recursive binary search
console.log(binarySearchRecursive(sortedArray, 7));  // Output: 6
console.log(binarySearchRecursive(sortedArray, 11)); // Output: -1

/**
 * Binary Search with Custom Comparator for Objects
 * @param {Array} arr - Sorted array of objects
 * @param {*} target - Target value to find
 * @param {string} property - Property to compare
 * @returns {number} - Returns the index of target if found, -1 otherwise
 */
function binarySearchObjects(arr, target, property) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid][property] === target) {
            return mid;
        }

        if (arr[mid][property] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

// Example usage with objects:
const sortedUsers = [
    { id: 1, name: "krishna" },
    { id: 2, name: "krish" },
    { id: 3, name: "madhav" },
    { id: 4, name: "mira" }
];

console.log(binarySearchObjects(sortedUsers, 3, "id")); // Output: 2

