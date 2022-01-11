function loop_size(node){
    let slow = node
    let fast = node
      
    while (fast && fast.next) {
      fast = fast.next.next
      slow = slow.next
      
      if(fast === slow){
        let res = 1
        let temp = slow
        while (temp.next != slow) {
          res ++
          temp = temp.next
        }
        return res
      }
    }
  }