const BinarySearchTree=require('./BinarySearchTree');
let bst=new BinarySearchTree();
bst.insert(3);
bst.insert(5);
bst.insert(2);
console.log("inorder.................");
bst.inOrder(bst.getRootNode());


console.log("Preorder.................");
bst.preOrder(bst.getRootNode());


console.log("postorder.................");
bst.postOrder(bst.getRootNode());
