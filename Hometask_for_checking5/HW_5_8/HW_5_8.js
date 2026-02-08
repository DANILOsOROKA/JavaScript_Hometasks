/*створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/
let txt_out = (array = [1, 2, 4, 6, 'Text', true]) => {for (item of array){document.write(`<li>${item}</li>`)}}
txt_out()