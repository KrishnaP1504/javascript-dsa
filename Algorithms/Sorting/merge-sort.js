/**
 * Performs merge sort on an array using the divide-and-conquer strategy
 * @param {Array} arr - The input array to be sorted
 * @returns {Array} - The sorted array
 */
function mergeSort(arr) {
    // Base case: if array has 1 or fewer elements, it's already sorted
    if (arr.length <= 1) return arr;

    // Divide array into two halves
    let mid = Math.floor(arr.length / 2);
    // Recursively sort the left half
    let left = mergeSort(arr.slice(0, mid));
    // Recursively sort the right half
    let right = mergeSort(arr.slice(mid));

    // Merge the sorted halves
    return merge(left, right);
}

/**
 * Merges two sorted arrays into a single sorted array
 * @param {Array} left - First sorted array
 * @param {Array} right - Second sorted array
 * @returns {Array} - Merged sorted array
 */
function merge(left, right) {
    let sortedArray = [];
    // Compare elements from both arrays and merge them in sorted order
    while (left.length && right.length) {
        if (left[0] < right[0]) sortedArray.push(left.shift());
        else sortedArray.push(right.shift());
    }
    // Concatenate any remaining elements
    return [...sortedArray, ...left, ...right];
}

// Example Usage: demonstrates how to use the merge sort function
let arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Merge Sort:", mergeSort(arr));
