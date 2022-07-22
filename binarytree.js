//     a
//   /  \
//  b   c
// / \
// d  e

// at most 2 children per node
// only a single root no parent
// only one path between the root and node
// empty tree is still considered a binary tree

//  a
// / \
// b  c
// /\  \
// d e  f
const treeify = require('treeify')
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }


  insert(value){
    const newNode = new Node(value);
    // to insert value see if the value is less than or greater than the root 
    // if less than then insert node on the left of the tree 
    // if greater than then insert on the right of the tree 
    // init vari to keep track of curr node 
    if (!this.root){
      this.root = newNode
      return this
      // if there is no current node then place the value being pushed in as the root and return it. 
    }
    let currNode = this.root;
    while(true){
      if (value === currNode.val) return undefined 
      // while the following statments are true 
      if(value < currNode.val){
        // once we check if the value is less than the tree root value 
        // place it on the left 
        // but first check if there is anything on the left 
        // if there is no node.left then place a new node with the value you want to insert
        if(!currNode.left){
          currNode.left = newNode;
          return this
        }
        // if there is nodes on the left you need to continue pushing currnode down to it gets a leafnode 
        currNode = currNode.left 
      } else if(value > currNode.val){
        if(!currNode.right){
          currNode.right = newNode;
          return this
        }
        currNode = currNode.right;
      } 

    }
  }





insertRec(value){
  const newNode = new Node(value);
if(!this.root){
  this.root = newNode
  return this
}
let currNode = this.root;
const addNode = ()=> {
  if (value === currNode.val) return undefined 
  // while the following statments are true 
  if(value < currNode.val){
    // once we check if the value is less than the tree root value 
    // place it on the left 
    // but first check if there is anything on the left 
    // if there is no node.left then place a new node with the value you want to insert
    if(!currNode.left){
      currNode.left = newNode;
      return this
    }
    // if there is nodes on the left you need to continue pushing currnode down to it gets a leafnode 
    currNode = currNode.left 
    addNode()
  } else if(value > currNode.val){
    if(!currNode.right){
      currNode.right = newNode;
      return this
    }
    currNode = currNode.right;
    addNode()
  } 

}
addNode()

}

contains(value){
  // if(this.val === value){
  //   return this;
  // }
  let currNodeCon = this;
  while(currNodeCon !== null){
   if(value < currNodeCon.val){
    currNodeCon = currNodeCon.left 
   } else if (value > currNodeCon.val){
    currNodeCon = currNodeCon.right 
   } else{
    
    return true  

  } 
 
  
  }
  return false
}



remove(value, parentNode = null){
let currentNodeRem = this;
while(currentNodeRem !== null){
  if (value < currentNodeRem.val){
    parentNode = currentNodeRem
    currentNodeRem = currentNodeRem.left
  } else if(value > currentNodeRem.val){
    parentNode = currentNodeRem.right
    currentNodeRem = currentNodeRem.right
  } else {
    if (currentNodeRem.left && currentNodeRem !== null){
      currentNodeRem.val = currentNodeRem.right.getMinValue()
      currentNodeRem.right.remove(currentNodeRem.val, currentNodeRem)
    } else if(parentNode.left === currentNodeRem){
      parentNode.left = currentNodeRem.left
    } if (currentNodeRem.left !== null ){

    }
  }
}







}









}

// end of array rep. top of the stack

// const depthFirstValues = (root) => {
//     const res = []
//     if (root === null) return res;
//     const stack = [root];
//     while(stack.length > 0 ){
//         const curr = stack.pop();
//         res.push(curr.val);

//         if(curr.right)stack.push(curr.right)
//         if(curr.left)stack.push(curr.left)

//     }
//    console.log(res)
//     return res
// }

const depthFirstValuesRecursive = (root) => {
  if (root === null) return [];
  const leftVal = depthFirstValuesRecursive(root.left);
  // give an array of what is on the left
  const rightVal = depthFirstValuesRecursive(root.right);
  // give an array of what is on the right

  return [root.val, ...leftVal, ...rightVal];
};

const closestValRecursive = (tree, target) => {
  return findclosestValInBstHelperRecursive(tree, target, Infinity);
};
const findclosestValInBstHelperRecursive = (tree, target, closest) => {
  if (tree === null) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.val)) {
    closest = tree.val;
  }
  if (target < tree.val) {
    return findclosestValInBstHelper(tree.left, target, closest);
  } else if (target > tree.val) {
    return findclosestValInBstHelper(tree.right, target, closest);
  } else {
    return closest;
  }
};
// time: o(log(n))
// space: o(log(n))
// if tree has one branch time and space is o(n) because const excute on single instead of double excution (left and right)

const closestValIter = (tree, target) => {
  return findclosestValInBstHelperIter(tree, target, Infinity);
};
const findclosestValInBstHelperIter = (tree, target, closest) => {
  let currentNode = tree;
  while (currentNode) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.val)) {
      closest = currentNode.val;
    }
    if (target < currentNode.val) {
      currentNode = currentNode.left;
    } else if (target > currentNode.val) {
      currentNode = currentNode.right;
    } else {
      break;
    }
    return closest;
  }
};

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// time and space:
// n = nodes
// time: o(n) const excution on nodes
// space: o(n) const space used for nodes.

// depthFirstValues(a);
// console.log(`this is rec ${depthFirstValuesRecursive(a)}`);



const tree = new BinarySearchTree();
// tree.root = new Node(10)
tree.insert(15)
tree.insert(12)
tree.insert(16)
tree.insert(19)
tree.insert(10)
console.log(tree.contains(2))

console.log(treeify.asTree(tree,true))