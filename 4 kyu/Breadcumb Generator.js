const generateBC = (url, separator) => {
    
    let urlWitoutProtocol = url.replace(/^https?\:\/\//i, "")
    let urlArr = urlWitoutProtocol.split("/").filter(i => i)
    let filteredArr = urlArr.filter(s=> !s.includes("index"))
    let urlFilter = urlArr.filter(s => !s.includes("index"))
    let lastElement = filteredArr.pop()
    const thirthyReducer = (str) => {
        let strArr = str.split('-')
        let words = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"]
        let filStr = strArr.filter(s => !words.includes(s))
        return filStr.reduce((a,s) => {return (a + s[0])},'')
    }
    if (lastElement.split(/[?:.#]/)[0].length > 30) {
        lastElement = thirthyReducer(lastElement)
    }
    let firstElement = filteredArr.shift()
    let refinedArr = filteredArr.map(e => {
        if (e.split(/[?:.#]/)[0].length < 31)
            return e
        else {
            return thirthyReducer(e)
        }
    })
    let spread = filteredArr.reduce((acc, e, i) => {
        if (i == 0)
            acc.push(e)
        else
            acc.push(acc[i-1]+"/"+e)
        return acc
    }, [])
    let res= []
    if (urlFilter.length < 2) {
        res.push('<span class="active">HOME</span>')
    } else {
        for (let i = 0; i < filteredArr.length; i++) {
            res.push(`<a href="/${spread[i]}/">${refinedArr[i].replace(/-/g, ' ').toUpperCase()}</a>`)
        }
        res.unshift('<a href="/">HOME</a>')
        res.push(`<span class="active">${lastElement.replace(/-/g, ' ').toUpperCase().split(/[?:.#]/)[0]}</span>`)
    }
    return res.join(separator)
}