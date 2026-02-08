/*створити функцію, яка повертає найменше число з масиву*/
let array = [4, 3, 5, 7, 8, 9, 10, 100, 11, 2];
let small_number = (array) => {let the_smallest = array[0]; for (let i = 0; i < array.length; i++){if (array[i] < the_smallest){the_smallest = array[i]}} return the_smallest;}
console.log(small_number(array))