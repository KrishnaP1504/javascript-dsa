/**
 * Performs bubble sort on an array
 * @param {Array} arr - The input array to be sorted
 * @returns {Array} - The sorted array
 */
function bubbleSort(arr) {
    let n = arr.length;
    // Outer loop: runs n-1 times, where n is array length
    for (let i = 0; i < n - 1; i++) {
        // Inner loop: compares adjacent elements
        // With each iteration of outer loop, the largest element "bubbles up" to the end
        // That's why we reduce the inner loop range by i each time
        for (let j = 0; j < n - i - 1; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap elements using destructuring assignment
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Example Usage: demonstrates how to use the bubble sort function
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble Sort:", bubbleSort(arr));

