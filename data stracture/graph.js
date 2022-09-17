class Graph {
    constructor() {
        this.AdjList = new Map();
    }
    // add vertex to the graph
    addVertex(v) {
        this.AdjList.set(v, []);
    }
    // add edge to the graph
    addEdge(v, w) {
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
    }

    // Prints the vertex and adjacency list
    printGraph() {
        // get all the vertices
        var get_keys = this.AdjList.keys();
        // iterate over the vertices
        for (var i of get_keys) {
            // great the corresponding adjacency list
            // for the vertex
            var get_values = this.AdjList.get(i);
            var conc = "";

            // iterate over the adjacency list
            // concatenate the values into a string
            for (var j of get_values)
                conc += j + " ";

            // print the vertex and its adjacency list
            console.log(i + " -> " + conc);
        }
    }

    // function to performs BFS
    bfs(startingNode) {
        // create a visited object
        let visited = new Set();

        // Create an object for queue
        const queue = [startingNode]

        // add the starting node to the queue
        // visited[startingNode] = true;
        // q.enqueue(startingNode);

        // loop until queue is empty
        while (queue.length > 0) {
            // get the element from the queue
            let getQueueElement = queue.shift()

            // passing the current vertex to callback functio

            // get the adjacent list for current vertex
            let get_List = this.AdjList.get(getQueueElement);

            console.log(getQueueElement)

            for (let i of get_List) {

                if (i === startingNode) {
                    console.log("found")
                }

                if (!visited.has(i)) {
                    queue.push(i)
                    visited.add(i)
                }
            }
        }
    }
}


// Using the above implemented graph class
var g = new Graph();
var vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
// g.printGraph();
g.bfs("E")