/**
 * Tower of Hanoi Implementation
 * Rules:
 * 1. Only one disk can be moved at a time
 * 2. A larger disk cannot be placed on top of a smaller disk
 * 3. All disks must be stacked in ascending order (largest at bottom)
 */

class TowerOfHanoi {
    constructor(numDisks) {
        this.numDisks = numDisks;
        // Initialize the three towers (rods)
        this.towers = {
            'A': [], // Source tower
            'B': [], // Auxiliary tower
            'C': []  // Destination tower
        };
        
        // Initialize source tower with disks (larger numbers represent larger disks)
        for (let i = numDisks; i > 0; i--) {
            this.towers['A'].push(i);
        }
    }

    /**
     * Moves disks from source to destination using recursive algorithm
     * @param {number} n - Number of disks to move
     * @param {string} source - Source tower
     * @param {string} auxiliary - Auxiliary tower
     * @param {string} destination - Destination tower
     */
    solve(n = this.numDisks, source = 'A', auxiliary = 'B', destination = 'C') {
        if (n === 1) {
            // Base case: Move single disk from source to destination
            this.moveDisk(source, destination);
            return;
        }

        // Move n-1 disks from source to auxiliary using destination as temporary
        this.solve(n - 1, source, destination, auxiliary);
        
        // Move the largest disk from source to destination
        this.moveDisk(source, destination);
        
        // Move n-1 disks from auxiliary to destination using source as temporary
        this.solve(n - 1, auxiliary, source, destination);
    }

    /**
     * Moves a single disk from one tower to another
     * @param {string} source - Source tower
     * @param {string} destination - Destination tower
     */
    moveDisk(source, destination) {
        // Remove disk from source tower
        const disk = this.towers[source].pop();
        
        // Check if move is valid (smaller disk on larger disk)
        const destTop = this.towers[destination][this.towers[destination].length - 1];
        if (destTop && disk > destTop) {
            throw new Error('Invalid move: Cannot place larger disk on smaller disk');
        }
        
        // Add disk to destination tower
        this.towers[destination].push(disk);
        
        // Print the move
        console.log(`Move disk ${disk} from ${source} to ${destination}`);
        this.printState();
    }

    /**
     * Prints current state of all towers
     */
    printState() {
        console.log('\nCurrent State:');
        for (let tower in this.towers) {
            console.log(`Tower ${tower}: ${this.towers[tower].join(' ')}`);
        }
        console.log('------------------------');
    }

    /**
     * Returns the minimum number of moves required
     * @returns {number} Minimum number of moves
     */
    getMinMoves() {
        return Math.pow(2, this.numDisks) - 1;
    }
}

// Example usage:
console.log("Tower of Hanoi Demonstration");
console.log("----------------------------");

// Create instance with 3 disks
const hanoi = new TowerOfHanoi(3);

// Print initial state
console.log("Initial State:");
hanoi.printState();

// Print minimum moves required
console.log(`Minimum moves required: ${hanoi.getMinMoves()}\n`);

// Solve the puzzle
console.log("Solution Steps:");
hanoi.solve();

// Verify final state
console.log("\nFinal State:");
hanoi.printState();

/**
 * Additional Example with Error Handling
 */
try {
    const invalidHanoi = new TowerOfHanoi(0);
} catch (error) {
    console.log("Error: Number of disks must be positive");
} 
