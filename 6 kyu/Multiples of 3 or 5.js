function solution(number){
    return number < 1 ? 0 : [...new Array(number)].map((e,i) => e=i).filter(e => e%3 == 0 || e%5 == 0 )
    .reduce((a, c) => a + c)
  }