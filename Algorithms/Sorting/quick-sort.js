/**
 * Performs quick sort on an array using the divide-and-conquer strategy
 * @param {Array} arr - The input array to be sorted
 * @returns {Array} - The sorted array
 */
function quickSort(arr) {
    // Base case: if array has 1 or fewer elements, it's already sorted
    if (arr.length <= 1) return arr;

    // Choose the last element as pivot
    let pivot = arr[arr.length - 1];
    // Partition array into three parts:
    // 1. Elements less than pivot
    let left = arr.filter(el => el < pivot);
    // 2. Elements greater than pivot
    let right = arr.filter(el => el > pivot);
    // 3. Elements equal to pivot (handles duplicates)
    let middle = arr.filter(el => el === pivot);

    // Recursively sort left and right partitions, then combine with middle
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Example Usage: demonstrates how to use the quick sort function
let arr = [10, 7, 8, 9, 1, 5];
console.log("Quick Sort:", quickSort(arr));

