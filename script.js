const board = document.querySelector('#board');
const SQUARE_NUMBER = 1485;

const colors = ["#CD5C5C", '#8B0000', '#00FF7F', '#9ACD32', '#FFA500', '#00FFFF']
for (let i = 0; i < SQUARE_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  board.append(square)

square.addEventListener('mouseover', creaColor)
square.addEventListener('mouseleave', clearColor)


function creaColor() {
  const color = gerRandom()
  square.style.background = color
  square.style.boxShadow = `0 0 2px ${color}, 0 0 20px ${color}`
}

function clearColor() {
  square.style.background = "#1d1d1d"
  square.style.boxShadow = `0 0 2px #000`
}

function gerRandom() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index]
}


}

