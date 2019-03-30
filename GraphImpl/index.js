const Graph=require('./Graph')
let g=new Graph(6);

var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ]; 

for(i of vertices){
    g.addVertex(i);
}

//Add edge
g.addEdge('A','B');
g.addEdge('A','D');
g.addEdge('A','E');
g.addEdge('B','C');
g.addEdge('D','E');
g.addEdge('E','F');
g.addEdge('E','C');
g.addEdge('C','F');

//print the graph
g.printGraph();

console.log("BFS"); 
g.bfs('A'); 




