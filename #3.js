/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
*/

function scramble(str1, str2) {
  let a = str1  
  for(el of str2){
     let index = a.indexOf(el)
     if(!(index == -1)){a = a.slice(0,index) + a.slice(index+1)}
     else{return false}
  }
  return true
}

//посмотрел решения и понял, что хеш это классная вещь