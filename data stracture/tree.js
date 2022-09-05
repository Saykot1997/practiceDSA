class TreeNode {
    constructor(data) {
        this.data = data
        this.children = []
        this.parent = null
    }

    addChild(child) {
        child.parent = this
        this.children.push(child)
    }
    print() {
        if (this.getLevel() > 0) {
            let level = this.getLevel()
            let str = ""

            for (let i = 0; i < level; i++) {
                str += "  "
            }
            console.log(str + "|__" + this.data)
        } else {
            console.log(this.data)
        }
        if (this.children.length > 0) {
            for (let child of this.children) {
                child.print()
            }
        }
    }
    getLevel() {
        let level = 0
        let itr = this
        while (itr.parent) {
            itr = itr.parent
            level++
        }
        return level
    }
}

const root = new TreeNode("Electronic")
const mobile = new TreeNode("Mobile")
const laptop = new TreeNode("Laptop")
const nokia = new TreeNode("Nokia")

root.addChild(mobile)
root.addChild(laptop)



mobile.addChild(new TreeNode("Samsung"))
mobile.addChild(new TreeNode("Realme"))
mobile.addChild(nokia)

laptop.addChild(new TreeNode("Lenovo"))
laptop.addChild(new TreeNode("Dell"))
laptop.addChild(new TreeNode("HP"))
laptop.addChild(new TreeNode("Macbook"))
laptop.addChild(new TreeNode("Serface"))


root.print()

// console.log(laptop.getLevel())
// console.log(nokia.getLevel())
// console.log(mobile.getLevel())
