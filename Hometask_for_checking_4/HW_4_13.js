/*Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)*/
function exchange(sumUAH,currencyValues,exchangeCurrency){
    switch (currencyValues){
        case 'USD':
            exchangeCurrency = sumUAH / 45
            console.log(exchangeCurrency)
            break;
        case 'EUR':
            exchangeCurrency = sumUAH / 50
            console.log(exchangeCurrency)
            break;
        case 'GRP':
            exchangeCurrency = sumUAH / 50
            console.log(exchangeCurrency)
            break;
    }
}
exchange(500000,'EUR')