class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if(!this.root){
      this.root = new Node(val)
      return this
    }
    let currentNode = this.root;
    while(currentNode){
      if(currentNode.val === val) return `${val} already exists in this tree`
      if(currentNode.val > val){
        if(!currentNode.left){
          currentNode.left = new Node(val)
          return this
        }
        currentNode = currentNode.left
      }else{
        if(!currentNode.right){
          currentNode.right = new Node(val)
          return this
        }
        currentNode = currentNode.right
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode=this.root) {
    if(!this.root){
      this.root = new Node(val)
      return this
    }

    if(currentNode.val === val) return `${val} already exists in this tree`
      if(currentNode.val > val){
        if(!currentNode.left){
          currentNode.left = new Node(val)
          return this
        }
        return this.insertRecursively(val,currentNode.left)
      }else{
        if(!currentNode.right){
          currentNode.right = new Node(val)
          return this
        }
        return this.insertRecursively(val,currentNode.right)
      }

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;

    while(currentNode){
      if(!currentNode) return undefined
      if(currentNode.val == val)return currentNode;
      if(currentNode.val > val){
        currentNode = currentNode.left
      } else{
        currentNode = currentNode.right
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode=this.root) {
    if(!currentNode) return undefined
    if(currentNode.val == val)return currentNode;
    if(currentNode.val > val){
      return this.findRecursively(val, currentNode.leftt)
    } else{
      return this.findRecursively(val, currentNode.right)
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node=this.root) {
    let arr = [node.val]
    if(node.left) arr = arr.concat(this.dfsPreOrder(node.left))
    if(node.right) arr = arr.concat(this.dfsPreOrder(node.right))
    return arr
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node=this.root) {
    let arr = []
    if(node.left) arr = arr.concat(this.dfsInOrder(node.left))
    arr.push(node.val)
    if(node.right) arr = arr.concat(this.dfsInOrder(node.right))
    return arr
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node= this.root) {
    let arr = []
    if(node.left) arr = arr.concat(this.dfsPostOrder(node.left))
    if(node.right) arr = arr.concat(this.dfsPostOrder(node.right))
    arr.push(node.val)
    return arr
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const queue  = [this.root]
    const traversalArr = [];
    while(queue.length > 0){
      if(queue[0].left) {
        queue.push(queue[0].left)
        traversalArr
      }
      if(queue[0].right) {
        queue.push(queue[0].right)
      }
      traversalArr.push(queue[0].val)
      queue.shift()
    }
    return traversalArr;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
