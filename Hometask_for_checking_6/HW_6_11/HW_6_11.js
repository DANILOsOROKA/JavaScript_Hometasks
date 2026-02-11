/*Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
Приклад моделі кінцевого об’єкту
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}*/
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

let sortedCards = cards.reduce((result, card) => {
    result[card.cardSuit].push(card);
    return result;
},
{
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
})

console.log(sortedCards);