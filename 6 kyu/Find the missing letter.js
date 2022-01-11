function findMissingLetter(arr) {
    const s = arr.join('')
    for (let i=0; i<s.length-1; i++){
      if (s.charCodeAt(i) !== s.charCodeAt(i+1)-1){
        return String.fromCharCode(s.charCodeAt(i)+1)
      }
    }
  }