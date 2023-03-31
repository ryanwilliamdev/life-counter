let lifeEl = document.getElementById("life-el");
// let saveEl = document.getElementById("save-el");
let lifeTotal = 20;

function increment() {
    lifeTotal += 1;
    lifeEl.textContent = lifeTotal;
}

function decrement() {
    lifeTotal -= 1;
    lifeEl.textContent = lifeTotal;
}

// function save() {
//     let currentSave = count + " - ";
//     saveEl.textContent += " " + currentSave;
//     countEl.textContent = 0;
//     count = 0;
// }