class MyHashSet {
    private obj = {}

    constructor() {}

    add(key: number): void {
        this.obj[key] = true
    }

    remove(key: number): void {
        delete this.obj[key]
    }

    contains(key: number): boolean {
        return this.obj[key] ? true : false
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */