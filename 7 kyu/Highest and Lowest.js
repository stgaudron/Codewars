function highAndLow(numbers){
    const sortedArray= numbers.split(" ").map(n => parseInt(n)).sort(function(a, b) {
      return +a - +b
    })
    return sortedArray[sortedArray.length - 1] +" "+ sortedArray[0]
  }