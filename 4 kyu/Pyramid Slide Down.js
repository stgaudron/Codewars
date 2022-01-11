function longestSlideDown (pyramid) {
    return pyramid.reduceRight((e,c) => c.map((v,i)=>v+Math.max(e[i],e[i+1])))[0]
   }