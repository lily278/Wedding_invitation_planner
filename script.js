//style selection
//design 1
//
    


function design1Click(){
    const clickValue = document.getElementById(`design1`).innerText
//console.log(clickValue)
    document.getElementById(`display-image`).classList.remove(`design2`)
    document.getElementById(`display-image`).classList.remove(`design3`)
    document.getElementById(`display-image`).classList.add(`design1`)
}

//design 2
//
    

function design2Click() {
    const clickVal = document.getElementById(`design2`).innerText
    //console.log(clickVal)
    document.getElementById(`display-image`).classList.remove(`design1`)
    document.getElementById(`display-image`).classList.remove(`design3`)
    document.getElementById(`display-image`).classList.add(`design2`)
}

//design3
//
    

function design3Click() {
    const click = document.getElementById(`design3`).innerText
//console.log(click)
    document.getElementById(`display-image`).classList.remove(`design1`)
    document.getElementById(`display-image`).classList.remove(`design2`)
    document.getElementById(`display-image`).classList.add(`design3`)
}

//input change

function getVenue(){
    let venue = document.getElementById(`venue`).value
    document.getElementById(`venue-display`).innerText = venue
}

function getDate(){
    let date = document.getElementById(`date`).value
    document.getElementById(`date-display`).innerText = date
}

function getFirstName (){
    let firstName = document.getElementById(`firstName`).value
    document.getElementById(`first-name-display`).innerText = firstName
}

function getSecondName (){
    let secondName = document.getElementById(`secondName`).value
    document.getElementById(`second-name-display`).innerText = secondName
}