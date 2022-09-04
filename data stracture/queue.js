class Queue {
    #stroage
    #size
    #first
    #last

    constructor() {
        this.#stroage = {}
        this.#size = 0
        this.#first = -1
        this.#last = -1
    }
    enqueue(data) {
        this.#stroage[this.#size] = data
        if (this.#size === 0) {
            this.#first++
            this.#last++
        } else {
            this.#last++
        }
        this.#size++
    }
    dequeue() {
        if (this.#size === 0) {
            return null
        }
        let element = this.#stroage[this.#first]
        delete this.#stroage[this.#first]
        this.#first++
        this.#size--
        return element
    }
    peek() {
        if (this.#size === 0) {
            return null
        }
        return this.#stroage[this.#first]
    }
}

module.exports = Queue