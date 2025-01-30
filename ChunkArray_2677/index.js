
function chunk(arr, size) {
    const res = []
    let tempRes = []

    for (let i = 0; i < arr.length; i++) {
        if (tempRes.length < size) {
            tempRes.push(arr[i])
            if (i === arr.length - 1) {
                res.push(tempRes)
            }
            continue
        }

        res.push(tempRes)
        tempRes = []
        tempRes.push(arr[i])
        if (i === arr.length - 1) {
            res.push(tempRes)
        }
    }  

    return res 
};

console.log(chunk([8,42,7,83,7,8324,37,7523,47,43,6,6], 4))