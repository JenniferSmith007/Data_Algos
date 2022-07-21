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

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// time and space:
// n = nodes
// time: o(n) const excution on nodes
// space: o(n) const space used for nodes.

// depthFirstValues(a);
console.log(`this is rec ${depthFirstValuesRecursive(a)}`);
