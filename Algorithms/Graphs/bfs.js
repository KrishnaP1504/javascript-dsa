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
     * Performs BFS traversal starting from given vertex
     * @param {any} startVertex - Starting vertex for BFS
     * @returns {Array} Array of vertices in BFS order
     */
    bfs(startVertex) {
        // Set to keep track of visited vertices
        const visited = new Set();
        
        // Queue for BFS traversal
        const queue = [];
        
        // Array to store BFS traversal order
        const result = [];

        // Start with the initial vertex
        queue.push(startVertex);
        visited.add(startVertex);

        // Continue until queue is empty
        while (queue.length > 0) {
            // Remove first vertex from queue
            const currentVertex = queue.shift();
            result.push(currentVertex);

            // Get all adjacent vertices
            const neighbors = this.adjacencyList.get(currentVertex);

            // For each neighbor of current vertex
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    // Add unvisited neighbor to queue and mark as visited
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }

    /**
     * Finds shortest path between two vertices using BFS
     * @param {any} startVertex - Starting vertex
     * @param {any} endVertex - Target vertex
     * @returns {Array} Shortest path from start to end vertex
     */
    shortestPath(startVertex, endVertex) {
        // Queue for BFS
        const queue = [[startVertex]];
        // Set to keep track of visited vertices
        const visited = new Set([startVertex]);

        // Continue until queue is empty
        while (queue.length > 0) {
            // Get the first path from queue
            const path = queue.shift();
            // Get the last vertex from path
            const currentVertex = path[path.length - 1];

            // If current vertex is the target, return the path
            if (currentVertex === endVertex) {
                return path;
            }

            // Get all adjacent vertices
            const neighbors = this.adjacencyList.get(currentVertex);

            // For each neighbor of current vertex
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    // Create new path by appending neighbor
                    const newPath = [...path, neighbor];
                    visited.add(neighbor);
                    queue.push(newPath);
                }
            }
        }

        // Return null if no path exists
        return null;
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

// Perform BFS traversal
console.log("BFS Traversal starting from vertex 'A':");
console.log(graph.bfs('A')); // ['A', 'B', 'C', 'D', 'E', 'F']

// Find shortest path
console.log("\nShortest path from 'A' to 'F':");
console.log(graph.shortestPath('A', 'F')); // ['A', 'B', 'D', 'F'] 
