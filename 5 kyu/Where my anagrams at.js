function anagrams(word, words) {
    return words.filter(e => e.split('').sort().join('') === word.split('').sort().join(''))
  }