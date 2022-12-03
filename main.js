let arr = [34,'hello',true,2,'test'];

function rev(arr){
   let newArr = []
   let k = arr.length-1
for(let i = 0; i < arr.length;i++){
    newArr[i]= arr[k]
    k--
}

return newArr
}
const res = rev(arr)
console.log(res)