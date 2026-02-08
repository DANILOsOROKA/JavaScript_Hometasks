/*створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/
let txt_out = (k = "Text") => document.write(`<ul><li>${k}</li><li>${k}</li><li>${k}</li></ul>`)
txt_out()