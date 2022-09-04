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
            return null
        }
        if (this.length === 1) {
            return this.head = null
        }
        let current = this.head
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
        this.length--
    }
    insert_at(insertIndex, data) {
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
        let current = this.head;
        let data = [];
        if (this.length === 0) {
            return "link list is empty"
        }
        while (current) {
            data.push(current.data)
            current = current.next;
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

module.exports = Linklist;



