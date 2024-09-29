function mapSatisfies(etalon: Map<any, any>, window: Map<any, any>): boolean {
    for (let [key, value] of etalon) {
        if (value > window.get(key) || !window.has(key)) {
            return false
        }
    }

    return true
}

function minWindow(s: string, t: string): string {
    if (t.length === 0) {
        return ""
    }

    let etalonMap = new Map()
    let windowMap = new Map()

    for (let char of t) {        // filling the etalon map from t
        if (etalonMap.has(char)) {
            etalonMap.set(char, etalonMap.get(char) + 1)
        } else etalonMap.set(char, 1)
    }

    let l = 0       // left pointer
    let r = 0       // right pointer

    let res = ""
    let resLength = Infinity

    while (r < s.length) {
        if (etalonMap.has(s[r])) {               // если это нужный нам символ заносим его
            if (windowMap.has(s[r])) {
                windowMap.set(s[r], windowMap.get(s[r]) + 1)
            } else windowMap.set(s[r], 1)
        }

        while (mapSatisfies(etalonMap, windowMap)) {     // увеличиваем левый указатель пока удовлетворяет
            let curWindow = s.slice(l, r + 1)
            let windowLen = r - l + 1
            if (windowLen < resLength) {
                res = curWindow
                resLength = windowLen
            }

            if (windowMap.has(s[l])) {
                windowMap.set(s[l], windowMap.get(s[l]) - 1)
            }

            l++
        }

        r++
    }

    return res
};

minWindow("ADOBECODEBANC", "ABC")