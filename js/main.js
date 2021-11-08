//Variables initialization
const increment = document.querySelector("#increment")
const save = document.querySelector("#save")
const people = document.querySelector("#pass-value")
const logs = document.querySelector("#saved-logs")
let peopleCount = 0

//add click event listener to increment btn
increment.addEventListener('click', (e) => {
    peopleCount++;
    people.innerText = `${peopleCount}`
})

