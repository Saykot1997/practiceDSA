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
    print() {
        let head = this.head;
        let data = [];

        while (head) {
            data.push(head.data)
            head = head.next;
        }
        // console.log(data)
        return data;
    }
    getLength() {
        return this.length
    }
}


let link_list = new Linklist();

link_list.unshift(1)
link_list.unshift(2)
link_list.unshift(3)
link_list.unshift(4)
link_list.push(5)
link_list.push(6)
link_list.push(7)
link_list.pop()
link_list.pop()
// link_list.shift()
console.log(link_list.print())
console.log(link_list.getLength())
console.log(link_list)




