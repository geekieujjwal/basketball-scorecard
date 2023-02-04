let add1 = document.getElementById("score1")

let count1 = 0
function increment_first1() {
    count1 += 1
    add1.textContent = count1
}

function increment_first2() {
    count1 += 2
    add1.textContent = count1
}

function increment_first3() {
    count1 += 3
    add1.textContent = count1
}

let add2 = document.getElementById("score2")
let count2 = 0

function increment_second1() {
    count2 += 1
    add2.textContent = count2
}

function increment_second2() {
    count2 += 2
    add2.textContent = count2
}

function increment_second3() {
    count2 += 3
    add2.textContent = count2
}

let newGame = getElementById("new_game")

function fresh() {
    add1.textContent = 0
    add2.textContent = 0
    count1 = 0
    count2 = 0
}