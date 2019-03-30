const Node = require('./node')
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let newNode = new Node(data);
        if (this.root == null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {

        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                // if right is not null recurr until  
                // null is found 
                this.insertNode(node.right, newNode);
            }
        }
    }
    getRootNode() {
        return this.root;
    }

    inOrder(node) {
        if (node != null) {
            this.inOrder(node.left)
            console.log(node.data);
            this.inOrder(node.right)
        }
    }

    preOrder(node){
        if(node!=null){
            console.log(node.data);
        this.preOrder(node.left);
        this.preOrder(node.right);
        }
        
    }
    postOrder(node){
        if(node!=null){
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.data);
        }
        
    }
}

module.exports=BinarySearchTree
