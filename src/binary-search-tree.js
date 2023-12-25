const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor () {
    this.root = null;
  }

  root() {
    return this.root;
  }

  add(data) {
    if (this.root === null) {
      this.root = new Node(data);
      return;
    }

    let currentNode = this.root;

    while(currentNode) {
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = new Node(data);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = new Node(data);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    let currentNode = this.root;

    while (currentNode) {
      if (data === currentNode.data) return currentNode;

      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return null;
  }

  remove(data) {
    let nodeToDelete = this.find(data);
    if (nodeToDelete === null) return;

    if (nodeToDelete.left === null && nodeToDelete.right === null) {
      nodeToDelete === null;
      return;
    }

    //TODO
  }

  min() {
    let currentNode = this.root;

    while(currentNode) {
      if (!currentNode.left) {
        return currentNode.data;
      }

      currentNode = currentNode.left;
    }
  }

  max() {
    let currentNode = this.root;

    while(currentNode) {
      if (!currentNode.right) {
        return currentNode.data;
      }

      currentNode = currentNode.right;
    }
  }
}

module.exports = {
  BinarySearchTree
};