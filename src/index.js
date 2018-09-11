document.addEventListener('DOMContentLoaded', () => {
  let memoryGame = document.getElementById('memory-game')


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
      memoryGame.append(cardDiv)}

    })
  }
})
