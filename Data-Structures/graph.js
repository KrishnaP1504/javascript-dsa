/**
 * A Graph class implementing an undirected graph using an adjacency list representation.
 * The graph is stored using a Map where each vertex maps to an array of its adjacent vertices.
 */
class Graph {
    constructor() {
        this.adjList = new Map();
    }

    /**
     * Adds a new vertex to the graph if it doesn't already exist.
     * @param {*} vertex - The vertex to add
     */
    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }

    /**
     * Adds an undirected edge between two vertices.
     * Both vertices must exist in the graph for the edge to be added.
     * @param {*} vertex1 - The first vertex
     * @param {*} vertex2 - The second vertex
     */
    addEdge(vertex1, vertex2) {
        if (this.adjList.has(vertex1) && this.adjList.has(vertex2)) {
            this.adjList.get(vertex1).push(vertex2);
            this.adjList.get(vertex2).push(vertex1);
        }
    }

    /**
     * Prints the graph structure showing each vertex and its adjacent vertices.
     * Format: vertex -> neighbor1, neighbor2, ...
     */
    printGraph() {
        for (let [vertex, edges] of this.adjList) {
            console.log(vertex + " -> " + edges.join(", "));
        }
    }
}

// Example Usage
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.printGraph();
// Output:
// A -> B, C
// B -> A, C
// C -> A, B

