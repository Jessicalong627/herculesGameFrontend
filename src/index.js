let cardA;
let cardB;
let memoryGame = document.getElementById('memory-game')
let cards;
let attempts =document.getElementById('attempts')



fetch('http://localhost:3000/api/v1/cards')
.then(response => response.json())
.then(cardsData => addCardDiv(cardsData))

function addCardDiv(cardsData){
  cardsData.forEach( card => {
    for(let i = 0; i < 2; i++){
    let cardDiv = document.createElement('div')
    cardDiv.className = "memory-card";
    cardDiv.dataset.name = `${card.name}`
    cardDiv.dataset.match = 'no-match'
    cardDiv.innerHTML = `<img class="front-face" src="${card.image_url}">
                         <img class="back-face" src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/ayK0FP2CHrFG8CGDJ1fYgKVa5JP.jpg">`
    memoryGame.append(cardDiv)
    }
    addEventListener()
  })
  }
  function addEventListener(){
    cards = document.querySelectorAll("[data-match='no-match']")
    cards.forEach(card => card.addEventListener('click', flipCard))
  }

  function flipCard() {
    if (!cardA){

      cardA = this
      this.classList.toggle('flip')

    }else{

      cardB = this
        this.classList.toggle('flip');
    }
    cardMatch()
  }


  function cardMatch() {
    let match = cardA.dataset.name === cardB.dataset.name
     match ? matchSuccess() :  matchFailure()
  }

  function matchSuccess(){
    cardA.removeEventListener('click', flipCard)
    cardB.removeEventListener('click', flipCard)
    cardA = null
    cardB = null
  }

function matchFailure(){
  setTimeout(() => {
    cardA.classList.remove('flip');
    cardB.classList.remove('flip');
    cardA = null
    cardB = null
    attempts.innerText -= 1
    if (attempts.innerText == 0) {
      alert('Game over! Try again!')
    }
  }, 750);
}
