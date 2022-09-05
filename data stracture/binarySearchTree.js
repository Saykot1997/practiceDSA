
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

    search(value) {
        // if value is at the base
        if (value === this.value) {
            return true
        }
        // if value is less then base or root tree
        if (value < this.value) {
            if (this.left) {
                return this.left.search(value)
            } else {
                return false
            }
        }
        // if value is greater then base or root
        if (value > this.value) {
            if (this.right) {
                return this.right.search(value)
            } else {
                return false
            }
        }
    }

    max() {
        if (!this.right) {
            return this.value
        }
        let itr = this.right

        // while(itr.){

        // }
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

// console.log(bst.in_order_traversel())
console.log(bst.search(20))
console.log(bst.search(32))

