function expression(number, arg){
    return !arg ?  number : (arg(number))
  }
  
  function zero(arg) {return expression(0, arg)}
  function one(arg) {return expression(1, arg)}
  function two(arg) {return expression(2, arg)}
  function three(arg) {return expression(3, arg)}
  function four(arg) {return expression(4, arg)}
  function five(arg) {return expression(5, arg)}
  function six(arg) {return expression(6, arg)}
  function seven(arg) {return expression(7, arg)}
  function eight(arg) {return expression(8, arg)}
  function nine(arg) {return expression(9, arg)}
  
  function plus(a) { return (b) => {return b + a}}
  function minus(a) { return (b) => {return b -a}}
  function times(a) { return (b) => {return b * a}}
  function dividedBy(a) { return (b) => {return (a !== 0 ? Math.floor(b / a) : 'cannot divide by 0')}}