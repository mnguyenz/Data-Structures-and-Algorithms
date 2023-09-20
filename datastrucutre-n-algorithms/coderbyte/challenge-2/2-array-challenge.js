class Node {
  constructor(value) {
    this.value = value;
    this.right = this.left = null;
  }
}

function ArrayChallenge(strArr) { 
  // code goes here 
  const binArr = strArr[0].slice(1, -1).split(", ");

  const convertToBinaryTree = (arr, i) => {
    let root = null
    if (i < arr.length) {
      root = new Node(arr[i]);
      root.left = convertToBinaryTree(arr, 2 * i + 1);
      root.right = convertToBinaryTree(arr, 2 * i + 2);
    }
    return root;
  }

  const tree = convertToBinaryTree(binArr, 0);

  const lowestCommonAncestor = (root, n1, n2) => {
    if (!root || root.value === n1 || root.value === n2) {
      return root;
    }
    const left = lowestCommonAncestor(root.left, n1, n2);
    const right = lowestCommonAncestor(root.right, n1, n2);
    if (!left) {
      return right;
    }
    if (!right) {
      return left
    }
    return root;
  }

  return lowestCommonAncestor(tree, strArr[1], strArr[2]).value; 
}
   
// keep this function call here 
console.log(ArrayChallenge(["[12, 5, 9, 6, 2, 0, 8, #, #, 7, 4, #, #, #, #]", "2", "6"]));