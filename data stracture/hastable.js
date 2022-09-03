class Hashtable {
    constructor(max = 100) {
        this.max = parseInt(max);
        this.array = new Array(parseInt(max));
        this.items = 0
    }
    resize() {
        let newArray = new Array(this.max * 2);
        this.max = this.max * 2
        this.array.forEach((item) => {
            if (item) {
                item.forEach(([key, value]) => {
                    let index = this.get_hash(key);
                    if (!newArray[index]) {
                        newArray[index] = []
                        newArray[index].push([key, value]);
                    } else {
                        let skip = false;
                        for (let i = 0; i < newArray[index].length; i++) {
                            if (skip) {
                                return
                            }
                            if (newArray[index][i][0] === key) {
                                newArray[index][i][1] = value;
                                skip = true
                            }
                        }
                        if (!skip) {
                            newArray[index].push([key, value])
                        }
                    }
                })
            }
        })
        this.array = newArray
    }
    get_hash(string) {
        let h = 0;
        for (let i = 0; i < string.length; i++) {
            h += string.charCodeAt(i);
        }
        return h % this.max
    }
    add_item(key, value) {
        let index = this.get_hash(key);
        this.items++
        let loadFactor = this.items / this.max
        if (loadFactor > .8) {
            this.resize()
        }
        if (!this.array[index]) {
            this.array[index] = []
            this.array[index].push([key, value]);
        } else {
            let skip = false;
            for (let i = 0; i < this.array[index].length; i++) {
                if (skip) {
                    return
                }
                if (this.array[index][i][0] === key) {
                    this.array[index][i][1] = value;
                    skip = true
                }
            }
            if (!skip) {
                this.array[index].push([key, value])
            }
        }
    }
    get_item(key) {
        let index = this.get_hash(key);
        let items = this.array[index]
        if (items && items.length > 0) {
            let item
            for (let i = 0; i < items.length; i++) {
                if (items[i][0] === key) {
                    item = items[i][1];
                }
            }
            return item;
        }
    }
    delete_item(key) {
        let index = this.get_hash(key);
        let items = this.array[index];
        let skep = false;

        if (items && items.length > 0) {
            let ind
            if (skep) {
                return
            }
            for (let i = 0; i < items.length; i++) {
                if (items[i][0] === key) {
                    ind = i
                    skep = true
                    items = items.splice(ind, 1)
                }
            }
            this.items--
        }
    }
    set_item(key, value) {
        let index = this.get_hash(key);
        for (let i = 0; i < this.array[index].length; i++) {
            if (this.array[index][i][0] === key) {
                this.array[index][i][1] = value;
            }
        }
    }
    get_object() {
        return this.array;
    }
    get_length() {
        return this.items
    }
    get_capacity() {
        return this.max
    }
    get_reminding_space() {
        return this.max - this.items
    }
}

const hashtable = new Hashtable(3);

// hashtable.add_item("name", "rohim");
hashtable.add_item("name", "riyad");
// hashtable.add_item("name", "ajim");
hashtable.add_item("age", "26");
hashtable.add_item("education", "MBA");
hashtable.add_item("interest", "gaming");
hashtable.add_item("skill", "programing");
hashtable.set_item("interest", "cycling")
hashtable.delete_item("name")
// hashtable.delete_item("interest")
console.log(hashtable.get_object());
console.log(hashtable.get_length())
console.log(hashtable.get_capacity());
console.log(hashtable.get_reminding_space());