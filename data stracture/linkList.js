// link list 

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class Linklist {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    unshift(data) {
        let newNode = new Node(data, this.head);
        this.head = newNode;
        this.length++
    }
    shift() {
        if (!this.length > 0) {
            throw new Error("Link list is empty")
        }
        if (this.length === 1) {
            return this.head = null
        }
        this.head = this.head.next;
        this.length--
    }
    push(data) {
        let current = this.head;
        if (!this.length > 0) {
            return this.unshift(data)
        }
        while (current.next) {
            current = current.next;
        }
        current.next = new Node(data);
        this.length++
    }
    pop() {
        if (!this.length > 0) {
            throw new Error("Link list is empty")
        }
        if (this.length === 1) {
            return this.head = null
        }
        let head = this.head
        while (head.next.next) {
            head = head.next;
        }
        head.next = null;
        this.length--
    }
    insert_at(data, insertIndex) {
        if (insertIndex > this.length || insertIndex < 0) {
            throw new Error("invalid index");
        }
        if (insertIndex === 0) {
            this.unshift(data)
            return
        }
        if (insertIndex === this.length) {
            this.push(data)
            return
        }
        let current = this.head
        let index = 0
        let pre
        while (index < insertIndex) {
            index++
            pre = current
            current = current.next
        }
        let next = current
        current = new Node(data, next);
        pre.next = current
        this.length++
    }
    remove_at(insertIndex = 0) {
        if (insertIndex >= this.length || insertIndex < 0) {
            throw new Error("invalid index");
        }
        if (insertIndex === 0) {
            this.shift()
            return
        }
        if (insertIndex === this.length - 1) {
            this.pop()
            return
        }
        let current = this.head
        let index = 0
        let pre
        while (index < insertIndex) {
            index++
            pre = current
            current = current.next
        }
        pre.next = current.next
        this.length--
    }
    print() {
        let head = this.head;
        let data = [];
        if (this.length === 0) {
            return "link list is empty"
        }
        while (head) {
            data.push(head.data)
            head = head.next;
        }
        return data;
    }
    getLength() {
        return this.length
    }
    getFirst() {
        if (this.length === 0) {
            throw new Error("link list is empty")
        }
        return this.head.data
    }
    getLast() {
        if (this.length === 0) {
            throw new Error("link list is empty")
        }
        let data = this.head;
        while (data.next) {
            data = data.next
        }
        return data.data
    }
}


let link_list = new Linklist();

// link_list.unshift(1)
// link_list.unshift(2)
// link_list.unshift(3)
// link_list.unshift(4)
// link_list.push({ name: "rifat", age: 27 })
link_list.push(1)
link_list.push(2)
link_list.push(3)
link_list.push(4)
link_list.push(5)
// link_list.push(4)
// link_list.insert_at(5, 0)
// link_list.pop()
// link_list.pop()
// link_list.shift()
link_list.remove_at(3)
console.log(link_list.print())
// console.log(link_list.getLength())
// console.log(link_list.getFirst())
// console.log(link_list.getLast())




