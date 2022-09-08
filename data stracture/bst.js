class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }
    add(data) {
        const newNode = new Node(data)
        if (!this.root) {
            this.root = newNode
            return
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(node, newNode) {
        if (node.data === newNode.data) {
            return null
        } else if (newNode.data > node.data) {
            if (!node.right) {
                node.right = newNode
            }
            else {
                this.insertNode(node.right, newNode)
            }
        } else {
            if (!node.left) {
                node.left = newNode
            }
            else {
                this.insertNode(node.left, newNode)
            }
        }
    }

    tree() {
        return this.root
    }

    contains(data) {
        let current = this.root
        while (current) {
            if (data === current.data) {
                return true
            } else if (data > current.data) {
                if (current.right) {
                    current = current.right
                } else {
                    return false
                }
            } else {
                if (current.left) {
                    current = current.left
                } else {
                    return false
                }
            }
        }
    }

    min() {
        if (!this.root) {
            return null
        }
        let current = this.root
        while (current.left) {
            current = current.left
        }
        return current.data
    }
    max() {
        if (!this.root) {
            return null
        }
        let current = this.root
        while (current.right) {
            current = current.right
        }
        return current.data
    }

    inorder(node = this.root) {
        let elements = []
        // travarse left sub tree
        if (node.left) {
            elements = elements.concat(this.inorder(node.left))
        }
        // travarse base tree
        elements.push(node.data)
        // travarse right sub tree
        if (node.right) {
            elements = elements.concat(this.inorder(node.right))
        }
        return elements
    }


    // Performs preorder traversal of a tree   
    preorder(node = this.root) {
        let elements = []
        // travarse base tree
        elements.push(node.data)
        // travarse left sub tree
        if (node.left) {
            elements = elements.concat(this.preorder(node.left))
        }
        // travarse right sub tree
        if (node.right) {
            elements = elements.concat(this.preorder(node.right))
        }
        return elements
    }


    // Performs postorder traversal of a tree
    postorder(node = this.root) {
        let elements = []
        // travarse left sub tree
        if (node.left) {
            elements = elements.concat(this.postorder(node.left))
        }
        // travarse right sub tree
        if (node.right) {
            elements = elements.concat(this.postorder(node.right))
        }
        // travarse base tree
        elements.push(node.data)
        return elements
    }

    delete(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {
        // if the root is null then tree is
        // empty
        if (node === null)
            return null;

        // if data to be delete is less than
        // roots data then move to left subtree
        else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        }

        // if data to be delete is greater than
        // roots data then move to right subtree
        else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        }

        // if data is similar to the root's data
        // then delete this node
        else {
            // deleting node with no children
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            // deleting node with one children
            if (node.left === null) {
                node = node.right;
                return node;
            }

            else if (node.right === null) {
                node = node.left;
                return node;
            }

            // Deleting node with two children
            // minimum node of the right subtree
            // is stored in aux
            let aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    //  finds the minimum node in tree
    // searching starts from given node
    findMinNode(node) {
        // if left of a node is null
        // then it must be minimum node
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }
}

const bst = new BST()

bst.add(8)
bst.add(5)
bst.add(7)
bst.add(3)
bst.add(12)
bst.add(11)
bst.add(10)
bst.add(17)
bst.add(20)

// console.log(bst.max())

// console.log(bst.tree())

// console.log(bst.contains(20))
// console.log(bst.tree())
// bst.delete(12)
console.log(bst.tree())
// console.log(bst.inorder())
// console.log(bst.preorder())
console.log(bst.postorder())
