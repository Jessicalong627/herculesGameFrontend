let cardA;
let cardB;
let memoryGame = document.getElementById('memory-game')
let cards;


fetch('http://localhost:3000/api/v1/cards')
.then(response => response.json())
.then(cardsData => addCardDiv(cardsData))

function addCardDiv(cardsData){
  cardsData.forEach( card => {
    for(let i = 0; i < 2; i++){
    let cardDiv = document.createElement('div')
    cardDiv.className = "memory-card";
    cardDiv.dataset.name = `${card.name}`
    cardDiv.innerHTML = `<img class="front-face" src="${card.image_url}">
                         <img class="back-face" src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/ayK0FP2CHrFG8CGDJ1fYgKVa5JP.jpg">`
    memoryGame.append(cardDiv)
    }
  })
  cards = document.querySelectorAll('.memory-card')
  cards.forEach(card => card.addEventListener('click', flipCard))
  }

  function flipCard() {
    console.log(this)
      this.classList.toggle('flip');
      if (!cardA){
        cardA = this
      }else{
        cardB = this
      }
      cardMatch(cardA, cardB);
  }



  // console.log(cardA)
  // console.log(cardB)

  // card.classList.toggle('flip');
  // if (cardA === undefined){
  //   cardA = event.target
  // }else{
  //   cardB = event.target}
  //   console.log(cardA)
  //   console.log(cardB)
function cardMatch(cardA, cardB) {
if (cardA.dataset.name === cardB.dataset.name){
  console.log('GREAT SUCCESS!!')
  matchSuccess(cardA, cardB);
  }
  else{
    matchFailure(cardA, cardB);
  }
}

function matchSuccess(cardA, cardB){
  cardA.removeEventListener('click', flipCard)
  cardB.removeEventListener('click', flipCard)
  cardA = null
  cardB = null
  console.log(cardA)
  console.log(cardB)
  cardMatch();
}

function matchFailure(cardA, cardB){

}
