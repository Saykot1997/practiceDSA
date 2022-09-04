class Stack {
    #stroage
    #size
    constructor() {
        this.#stroage = {}
        this.#size = 0
    }
    push(data) {
        this.#stroage[this.#size] = data
        this.#size++
    }
    pop() {
        if (this.#size === 0) {
            return null
        }
        let element = this.#stroage[this.#size]
        delete this.#stroage[this.#size]
        this.#size--
        return element
    }
    peek() {
        if (this.#size === 0) {
            return null
        }
        return this.#stroage[this.#size - 1]
    }
}

module.exports = Stack