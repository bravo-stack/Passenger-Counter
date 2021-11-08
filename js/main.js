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


//add click event listener to save btn
save.addEventListener('click', (e) => {
    if(peopleCount === 0) {
        //do nothing
        console.log("not allowed to save empty logs")
    } else {
    const li = document.createElement("li")
    let textNode = document.createTextNode(`${peopleCount}__`)
    li.appendChild(textNode)
    logs.appendChild(li)
    people.innerText = "0"
    peopleCount = 0
    }
})