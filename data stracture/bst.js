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

// console.log(bst.tree())

console.log(bst.contains(20))
