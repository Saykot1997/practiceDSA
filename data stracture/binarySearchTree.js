
class BST {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
    add(value) {
        if (this.value === value) {
            return
        }
        if (value < this.value) {
            if (this.left) {
                this.left.add(value)
            } else {
                this.left = new BST(value)
            }
        } else {
            if (this.right) {
                this.right.add(value)
            } else {
                this.right = new BST(value)
            }
        }
    }
    // deleteNode(data, parentNode) {

    // }
    delete(data) {
        if (data === this.value) {
            console.log(`data is equal to the root node ${this.value} `)
            if (!this.left && !this.right) {

            }
        } else if (data > this.value) {
            console.log(`data: ${data} is greter then root: ${this.value} `)
            this.right.delete(data, this.right)
        } else {
            console.log(`data: ${data} is smaller then root: ${this.value} `)
            this.left.delete(data, this.left)
        }
    }
    min() {
        if (!this.left) {
            return this.value
        }
        let itr = this.left
        while (itr.left) {
            itr = itr.left
        }
        return itr.value
    }
    max() {
        if (!this.left) {
            return this.value
        }
        let itr = this.left
        while (itr.left) {
            itr = itr.left
        }
        return itr.value
    }
    tree() {
        return this
    }
    in_order_traversel() {
        // return this
        let elements = []
        // travarse left sub tree
        if (this.left) {
            elements = elements.concat(this.left.in_order_traversel())
        }
        // travarse base tree
        elements.push(this.value)
        // travarse right sub tree
        if (this.right) {
            elements = elements.concat(this.right.in_order_traversel())
        }
        return elements
    }
    contains(value) {
        // if value is at the base
        if (value === this.value) {
            return true
        }
        // if value is less then base or root tree
        if (value < this.value) {
            if (this.left) {
                return this.left.contains(value)
            } else {
                return false
            }
        }
        // if value is greater then base or root
        if (value > this.value) {
            if (this.right) {
                return this.right.contains(value)
            } else {
                return false
            }
        }
    }

}


const bst = new BST(8)

// bst.add()
bst.add(5)
bst.add(7)
bst.add(3)
bst.add(12)
bst.add(11)
bst.add(10)
bst.add(17)
bst.add(20)

// console.log(bst.contains(20))
// console.log(bst.contains(20))
// console.log(bst.min())
bst.delete(20)
console.log(bst.tree())
console.log(bst.in_order_traversel())

