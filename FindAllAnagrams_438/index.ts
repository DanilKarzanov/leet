function satisfies(etalon: Map<any, any>, window: Map<any, any>): boolean {
    // console.log("etalon - ", etalon, "window - ", window)

    for (const [key, value] of etalon) {
        if (value !== window.get(key)) {
            return false
        }
    }

    return true
}

function findAnagrams(s: string, p: string): number[] {
    let l = 0
    let r = 0
    let res: number[] = []
    let etalonMap = new Map()
    let windowMap = new Map()

    for (const char of p) {
        etalonMap.set(char, true)
    }

    while (r < s.length) {
        if (etalonMap.has(s[r])) {
            windowMap.set(s[r], true)
            console.log("WINDOW MAP - ", windowMap, "current right pointer - ", r, "value - ", s[r], "left pointer - ", l)
        }

        if (r >= p.length - 1) {
            if (satisfies(etalonMap, windowMap)) {
                res.push(l)
            }

            if (windowMap.has(s[l])) {
                windowMap.set(s[l], false)
            }

            l++
        } 
        
        r++
    }

    console.log("RESULT - ", res)
    return res
};

findAnagrams("cbaebabacd", "abc")