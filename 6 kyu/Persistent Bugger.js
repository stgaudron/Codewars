function persistence(num) {
    let step = 0
   
    const persist = (n) => {
      step++
      const res = n.toString().split('').reduce((a,c)=> a*c,1)
      return res < 10 ?  step : persist(res)
    }
    return num < 10 ?  step : persist(num)
 }