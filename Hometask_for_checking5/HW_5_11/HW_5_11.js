/*створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13*/
let sum = (arr) => {let suma = 0; for (let i = 0; i < arr.length; i++){suma+=arr[i]}console.log(suma);}
sum([1, 2, 14, 43])