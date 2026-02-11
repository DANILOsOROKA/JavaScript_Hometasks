/*описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу

Після опису, використовуючи функції масивів:
 – знайти піковий туз
 – всі шістки
 – всі червоні карти
 – всі буби
 – всі трефи від 9 та більше*/
const cards = [
  {cardSuit: 'hearts', value: '6', color: 'red'},
  {cardSuit: 'hearts', value: '7', color: 'red'},
  {cardSuit: 'hearts', value: '8', color: 'red'},
  {cardSuit: 'hearts', value: '9', color: 'red'},
  {cardSuit: 'hearts', value: '10', color: 'red'},
  {cardSuit: 'hearts', value: 'Jack', color: 'red'},
  {cardSuit: 'hearts', value: 'Queen', color: 'red'},
  {cardSuit: 'hearts', value: 'King', color: 'red'},
  {cardSuit: 'hearts', value: 'Ace', color: 'red'},

  {cardSuit: 'diamonds', value: '6', color: 'red'},
  {cardSuit: 'diamonds', value: '7', color: 'red'},
  {cardSuit: 'diamonds', value: '8', color: 'red'},
  {cardSuit: 'diamonds', value: '9', color: 'red'},
  {cardSuit: 'diamonds', value: '10', color: 'red'},
  {cardSuit: 'diamonds', value: 'Jack', color: 'red'},
  {cardSuit: 'diamonds', value: 'Queen', color: 'red'},
  {cardSuit: 'diamonds', value: 'King', color: 'red'},
  {cardSuit: 'diamonds', value: 'Ace', color: 'red'},

  {cardSuit: 'clubs', value: '6', color: 'black'},
  {cardSuit: 'clubs', value: '7', color: 'black'},
  {cardSuit: 'clubs', value: '8', color: 'black'},
  {cardSuit: 'clubs', value: '9', color: 'black'},
  {cardSuit: 'clubs', value: '10', color: 'black'},
  {cardSuit: 'clubs', value: 'Jack', color: 'black'},
  {cardSuit: 'clubs', value: 'Queen', color: 'black'},
  {cardSuit: 'clubs', value: 'King', color: 'black'},
  {cardSuit: 'clubs', value: 'Ace', color: 'black'},

  {cardSuit: 'spades', value: '6', color: 'black'},
  {cardSuit: 'spades', value: '7', color: 'black'},
  {cardSuit: 'spades', value: '8', color: 'black'},
  {cardSuit: 'spades', value: '9', color: 'black'},
  {cardSuit: 'spades', value: '10', color: 'black'},
  {cardSuit: 'spades', value: 'Jack', color: 'black'},
  {cardSuit: 'spades', value: 'Queen', color: 'black'},
  {cardSuit: 'spades', value: 'King', color: 'black'},
  {cardSuit: 'spades', value: 'Ace', color: 'black'}
];

function finding(array){
  console.log(array.filter(item => item.value.includes('Ace') && item.cardSuit.includes('spades')));
  console.log(array.filter(item => item.value.includes('6')))
  console.log(array.filter(item => item.color.includes('red')))
  console.log(array.filter(item => item.cardSuit.includes('diamonds')))
  console.log(array.filter(item => 
            item.cardSuit.includes('clubs') && 
            ['9', '10', 'Jack', 'Queen', 'King', 'Ace'].some(value => item.value.includes(value))))
}
finding(cards)