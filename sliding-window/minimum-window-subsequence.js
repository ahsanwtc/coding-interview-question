const minWindow = (str1, str2) => {
  let indexS1 = 0, indexS2 = 0, answer = '', length = Number.POSITIVE_INFINITY;

  while (indexS1 < str1.length) {
    if (str1[indexS1] === str2[indexS2]) {
      
      /* increment the pointer to point at the next character in str2 */
      indexS2++;

      /* at this point, the indexS2 is pointing all the way at end of str2 + 1 */
      if (indexS2 >= str2.length) {
        
        /* bring back one index to point at the end of the str2 */
        indexS2--;
        
        /* create new pointers to treverse the string in backwards direction */
        /* end + 1 will be helpful in substring */
        let start = indexS1;
        let end = start + 1;
        
        /* keep treversing till you reach at the start of the str2 */
        while (indexS2 > -1) {
          /* when start pointer in str1 matches the character at indexS2 in str2, move indexS2 backwards by 1 */
          if (str1[start] === str2[indexS2]) {
            indexS2--;
          }

          start--;
        }

        /* when loop ends, start points to left by one index and indexS2 will -1 */
        start++;
        indexS2++;

        /* calculate the lenght of the found substring by using start and end pointers */
        const l = end - start;

        /* assign only when previous lenght is greater than the new found length */
        if (length > l) {
          length = l;
          answer = str1.substring(start, end);
        }
      }

    }
    /* keep doing till the end of first string */
    indexS1++;
  }

  return answer;
};


console.log(minWindow("azjskfztf", "sz"));                 /* correct answer: "skfz" */
console.log(minWindow("this is a test string", "tis"));    /* correct answer: "this" */
console.log(minWindow("asbfgedasfbdaaf", "bfd"));          /* correct answer: "" */
console.log(minWindow("Hello how are you?", "ok"));        /* correct answer: "" */

console.log(minWindow("abcdebdde", "bde"));
console.log(minWindow("fgrqsqsnodwmxzkzxwqegkndaa", "kzed"));
console.log(minWindow("michmznaitnjdnjkdsnmichmznait", "michmznait"));
console.log(minWindow("afgegrwgwga", "aa"));
console.log(minWindow("abababa", "ba"));
