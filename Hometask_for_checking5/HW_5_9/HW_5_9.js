/*створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.*/
let arr = [
            {
                id: 1,
                name: "Dan",
                age: 30
            },

            {
                id: 2,
                name: "Alex",
                age: 33
            },

            {
                id: 3,
                name: "Max",
                age: 24
            }
]
let txt_out = (arr) => {for(let i = 0; i < arr.length; i++){document.write(`<div>${arr[i].id}</div>`) , document.write(`<div>${arr[i].name}</div>`) , document.write(`<div>${arr[i].age}</div>`)}}
txt_out(arr)