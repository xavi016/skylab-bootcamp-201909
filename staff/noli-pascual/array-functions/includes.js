 
function includes(arr, val){
    if(val === undefined){return false}
    else{
    for(var i=0; i<arr.length; i++){if(arr[i] === val) return true;}
    return false}
}
  var a = [1, 2, 3, 4]
  console.log(includes(a, 1)) 
  console.log(include());