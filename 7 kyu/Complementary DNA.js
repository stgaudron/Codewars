function DNAStrand(dna){
    let answer = '';
    for (let i = 0; i < dna.length; i++) {
      
      if (dna.charAt(i)==='A'){
        answer += 'T';
        }
      else if (dna.charAt(i)==='T'){
        answer += 'A';
        }
      else if (dna.charAt(i)=== 'C'){
        answer += 'G';
        }
      else if (dna.charAt(i)=== 'G'){
        answer += 'C';
        }
      else 
        console.error('unexpected character in dna')
      }
    return answer;
  }