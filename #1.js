/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
*/

function findUniq(arr) {
  if(arr.length >= 3){
  let a
    new Set(arr).forEach(item=>{
	if(!a && arr.filter(elem=>elem==item).length == 1){
            a = item
        }
    })
  return a
  }
}