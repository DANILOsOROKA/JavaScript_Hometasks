/*створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах*/
let swap = (arr, i1, i2) => {let n = arr[i1]; arr[i1] = arr[i2]; arr[i2] = n; return arr;}
console.log(swap([1, 4 ,6 , 12], 0, 1))