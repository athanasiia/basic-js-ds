const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor () {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    if (this.treeRoot === null) {
      this.treeRoot = new Node(data);
      return;
    }

    let currentNode = this.treeRoot;

    while(currentNode) {
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = new Node(data);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else if (data > currentNode.data) {
        if (!currentNode.right) {
          currentNode.right = new Node(data);
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else break;
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    let currentNode = this.treeRoot;

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
    const searchForSuccessor = node => {
      while (node.left) {
        node = node.left;
      }
      return node.data;
    }

    const deleteNode = (node, value) => {
      if (node === null) {
        return node;
      }

      if (value < node.data) {
        node.left = deleteNode(node.left, value);
      } else if (value > node.data) {
        node.right = deleteNode(node.right, value);
      } else {
        
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          return node.right;
        }

        if (!node.right) {
          return node.left;
        }

        node.data = searchForSuccessor(node.right);
        node.right = deleteNode(node.right, node.data);
      }

      return node;
    }

    this.treeRoot = deleteNode(this.treeRoot, data);
  }

  min() {
    let currentNode = this.treeRoot;

    while(currentNode) {
      if (!currentNode.left) {
        return currentNode.data;
      }

      currentNode = currentNode.left;
    }
  }

  max() {
    let currentNode = this.treeRoot;

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