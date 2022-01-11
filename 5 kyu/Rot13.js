function rot13(message){
    rot13.input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
    rot13.output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.split('')
    rot13.lookup = rot13.input.reduce((m,k,i) => Object.assign(m, {[k]: rot13.output[i]}), {})
    
    return message.split('').map(e => rot13.lookup[e] || e).join('')
  }