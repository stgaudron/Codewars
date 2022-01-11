const permutations = (string) => {
    let result = [];
    inputArr = string.split("")
    const permute = (arr, m = []) => {
        if(arr.length === 0) {
            result.push(m)
        } else {
            for (let i=0; i<arr.length; i++) {
                let curr = arr.slice()
                let next = curr.splice(i,1)
                permute (curr.slice(), m.concat(next))
            }
        }
    }

    permute(inputArr)
    let res = []
    res = result.map(a => a.join(""))
    r = [... new Set(res)]
    return r
}