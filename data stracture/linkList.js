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
        this.length = this.length + 1;
    }
    shift() {
        this.head = this.head.next;
        this.length = this.length - 1;
    }
    push(data) {
        let newNode = new Node(data);
        let head = this.head;
        while (head.next) {
            head = head.next;
        }
        head.next = newNode;
        this.length = this.length + 1
    }
    pop() {
        let head = this.head
        while (head.next.next) {
            head = head.next;
        }
        head.next = null;
        this.length = this.length - 1
    }
    insert_at(data, insertIndex) {
        if (insertIndex > this.length || insertIndex < 0) {
            throw new console.error("invalid index");
        }

        if (insertIndex === 0) {
            const newNode = new Node(data)
            this.unshift(newNode)
            return
        }
        if (insertIndex === this.length) {
            const newNode = new Node(data)
            this.push(newNode)
            return
        }

        let itr = this.head
        let index = 0

        while (index < insertIndex) {
            itr = itr.next
            index++
        }
        itr.next = new Node(data, itr.next);
        this.length = this.length + 1
    }
    print() {
        let head = this.head;
        let data = [];

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
        return this.head.data
    }
    getLast() {
        let data = this.head;
        while (data.next) {
            data = data.next
        }
        return data.data
    }
}


let link_list = new Linklist();

link_list.unshift({ name: "rohim", age: 32 })
link_list.unshift({ name: "kiran", age: 22 })
link_list.unshift(3)
link_list.unshift(4)
// link_list.push({ name: "rifat", age: 27 })
link_list.push(6)
// link_list.push(7)
// link_list.insert_at(5, 0)
// link_list.pop()
// link_list.pop()
// link_list.shift()
console.log(link_list.print())
// console.log(link_list.getLength())
// console.log(link_list.getFirst())
// console.log(link_list.getLast())




