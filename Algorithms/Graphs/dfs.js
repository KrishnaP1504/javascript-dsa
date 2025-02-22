// Graph class implementation using adjacency list
class Graph {
    constructor() {
        // Initialize adjacency list to store graph
        this.adjacencyList = new Map();
    }

    // Add vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    // Add edge between two vertices
    addEdge(vertex1, vertex2) {
        // Add edge in both directions for undirected graph
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1);
    }

    /**
     * Performs DFS traversal starting from given vertex
     * @param {any} startVertex - Starting vertex for DFS
     * @returns {Array} Array of vertices in DFS order
     */
    dfs(startVertex) {
        const visited = new Set();
        const result = [];

        // Recursive helper function for DFS
        const dfsHelper = (vertex) => {
            // Mark current vertex as visited and add to result
            visited.add(vertex);
            result.push(vertex);

            // Recursively visit all unvisited neighbors
            const neighbors = this.adjacencyList.get(vertex);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    dfsHelper(neighbor);
                }
            }
        };

        // Start DFS from the given vertex
        dfsHelper(startVertex);
        return result;
    }

    /**
     * Performs iterative DFS using a stack
     * @param {any} startVertex - Starting vertex for DFS
     * @returns {Array} Array of vertices in DFS order
     */
    dfsIterative(startVertex) {
        const visited = new Set();
        const result = [];
        const stack = [startVertex];

        // Mark start vertex as visited
        visited.add(startVertex);

        while (stack.length > 0) {
            // Pop vertex from stack
            const currentVertex = stack.pop();
            result.push(currentVertex);

            // Get all adjacent vertices
            const neighbors = this.adjacencyList.get(currentVertex);

            // Push all unvisited neighbors to stack
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    stack.push(neighbor);
                }
            }
        }

        return result;
    }

    /**
     * Detects cycles in the graph using DFS
     * @returns {boolean} True if cycle exists, false otherwise
     */
    hasCycle() {
        const visited = new Set();
        const recursionStack = new Set();

        // Helper function for cycle detection
        const hasCycleUtil = (vertex) => {
            // Mark current vertex as visited and add to recursion stack
            visited.add(vertex);
            recursionStack.add(vertex);

            // Check all neighbors
            const neighbors = this.adjacencyList.get(vertex);
            for (const neighbor of neighbors) {
                // If neighbor not visited, recursively check for cycle
                if (!visited.has(neighbor)) {
                    if (hasCycleUtil(neighbor)) {
                        return true;
                    }
                }
                // If neighbor is in recursion stack, cycle exists
                else if (recursionStack.has(neighbor)) {
                    return true;
                }
            }

            // Remove vertex from recursion stack
            recursionStack.delete(vertex);
            return false;
        };

        // Check all vertices (handles disconnected components)
        for (const vertex of this.adjacencyList.keys()) {
            if (!visited.has(vertex)) {
                if (hasCycleUtil(vertex)) {
                    return true;
                }
            }
        }

        return false;
    }
}

// Example usage:
const graph = new Graph();

// Add vertices
['A', 'B', 'C', 'D', 'E', 'F'].forEach(vertex => graph.addVertex(vertex));

// Add edges
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

// Perform recursive DFS traversal
console.log("Recursive DFS Traversal starting from vertex 'A':");
console.log(graph.dfs('A'));

// Perform iterative DFS traversal
console.log("\nIterative DFS Traversal starting from vertex 'A':");
console.log(graph.dfsIterative('A'));

// Check for cycles
console.log("\nDoes the graph have a cycle?:", graph.hasCycle());

// Create a graph with a cycle for demonstration
const cyclicGraph = new Graph();
['X', 'Y', 'Z'].forEach(vertex => cyclicGraph.addVertex(vertex));
cyclicGraph.addEdge('X', 'Y');
cyclicGraph.addEdge('Y', 'Z');
cyclicGraph.addEdge('Z', 'X');

console.log("\nDoes the cyclic graph have a cycle?:", cyclicGraph.hasCycle()); 
