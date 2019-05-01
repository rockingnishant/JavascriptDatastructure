//create a graph class
const Queue = require('./Queue');
class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    //Add vertex to the graph
    addVertex(v) {
        this.AdjList.set(v, [])
    }

    //Add edge to the graph
    addEdge(v, w) {
        // get the list for vertex v and put the 
        // vertex w denoting edge betweeen v and w 
        this.AdjList.get(v).push(w);

        // Since graph is undirected, 
        // add an edge from w to v also 
        this.AdjList.get(w).push(v);
    }

    printGraph() {
        //get all the vertices
        var get_Keys = this.AdjList.keys();

        //iterate the graph
        for (var i of get_Keys) {
            var adlist = this.AdjList.get(i);
            console.log(i + "- >" + adlist.join(','));

        }

    }

    bfs(startingNode) {
        let visited = [];

        for (let i = 0; i < this.noOfVertices; i++) {
            visited[i] = false
        }

        let q = new Queue();

        visited[startingNode] = true;
        q.enqueue(startingNode);

        while (!q.isEmpty()) {
            let getQueueElement = q.dequeue();
            console.log(getQueueElement);
            let get_List = this.AdjList.get(getQueueElement);


            for (let i in get_List) {
                let neigh = get_List[i];
                if (!visited[neigh]) {
                    visited[neigh] = true;
                    q.enqueue(neigh);
                }
            }
        }
    }
}



module.exports = Graph