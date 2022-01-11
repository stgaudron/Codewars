function duplicateCount(text){
  
    const uniques = new Set(text.toLowerCase())
    const duplicates = text.toLowerCase().split('').filter(item => {
      if (uniques.has(item)) {
        uniques.delete(item)
      } else {
        return item
      }
    })
    const uniqueDups = new Set(duplicates)
    return uniqueDups.size
  }