let score1 = Math.floor(Math.random() * 6) + 1 
let score2 = Math.floor(Math.random() * 6) + 1
let winner = ''

let score1El = document.querySelector('#score1');
score1El.textContent = score1

let score2El = document.querySelector('#score2');
score2El.textContent = score2

let winnerEl = document.querySelector('#winner');


console.log(score1 > score2)

if (score1 > score2) {
  winner = '玩家一'
} else if (score2 > score1) {
  winner = '玩家二'
} else {
  winner = '沒有人'
}

winnerEl.textContent = winner