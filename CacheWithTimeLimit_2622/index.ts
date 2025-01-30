class TimeLimitedCache {
    map = new Map()    
    timeoutMap = new Map()
    constructor() {

    }
    
    set(key: number, value: number, duration: number): boolean {
        const existed = this.map.has(key)
        const timeoutExists = this.timeoutMap.get(key)
        if (timeoutExists) {
            clearTimeout(timeoutExists)
        }

        this.map.set(key, value)
        const id = setTimeout(() => {
            this.map.delete(key)
        }, duration)
        this.timeoutMap.set(key, id)

        if (existed) {
            return true
        }
        
        return false
    }
    
    get(key: number): number {
        return this.map.get(key) || -1
    }
    
    count(): number {
        return this.map.size
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */