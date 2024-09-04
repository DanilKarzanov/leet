// s - большая строка 
// t - символы вхождения которых надо найти в s
function minWindow(s: string, t: string): string {
    let minimumSubstring: string = ""
    let occuredLetters = new Map()
    let leftPointer: number = 0

    const fillMap = function() {
        for (let char of t) {
            if (occuredLetters.get(char)) {
                occuredLetters.set(char, occuredLetters.get(char) + 1)
            } else {
                occuredLetters.set(char, 1)
            }
        }
    }

    fillMap()
    console.log("map - ", occuredLetters)
    
    for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
        let currentRight = s[rightPointer]

        console.log("right pointer elem - ", currentRight)


        if (occuredLetters.get(currentRight)) {
            occuredLetters.set(currentRight, occuredLetters.get(currentRight) - 1)
            if (occuredLetters.get(currentRight) === 0) {
                occuredLetters.delete(currentRight)
            }
            
            console.log("delete from map", occuredLetters)
        }

        if (occuredLetters.size === 0) {
            minimumSubstring = s.slice(leftPointer, rightPointer)
            return minimumSubstring
        } 
    
    }

    return minimumSubstring
};

console.log(minWindow("ADOBECODEBANC", "ABC"))