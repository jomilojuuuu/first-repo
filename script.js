let redbutton = document.getElementById('red');
let yellowbutton = document.getElementById('yellow');
let greenbutton = document.getElementById('green');

// redbutton.onclick = () => console.log('you clicked red')
// yellowbutton.onclick = () => console.log('you clicked yellow')
// greenbutton.onclick = () => console.log('you clicked green')

const squares = document.querySelectorAll('.colorsquare')
// console.log(square)
const timesclicked = {'red': 0, 'yellow': 0, 'green': 0}

squares.forEach(square => {
    square.onclick = () => {
        timesclicked[square.value] += 1 
        // console.log(square.value)
        square.innerText = timesclicked[square.value]
    }
})

function clearscore() {
    timesclicked.red = 0
    timesclicked.yellow = 0
    timesclicked.green = 0
    squares.forEach(square =>square.innerText = '')
}

const cleargamebtn = document.getElementById('new')
cleargamebtn.onclick = () => clearscore()
