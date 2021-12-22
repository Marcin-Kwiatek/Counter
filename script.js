function timeToEvent(year, month, day, hour, minute, second, millisecond) {
    let currentTime = new Date()
    let eventDate = new Date(year, month, day, hour, minute, second, millisecond)
    let remainingTime = eventDate.getTime() - currentTime.getTime()
    if (remainingTime > 0) {
        let s = remainingTime / 1000
        let min = s / 60
        let h = min / 60
        let d = h / 24

        let sLeft = Math.floor(s % 60)
        let minLeft = Math.floor(min % 60)
        let hLeft = Math.floor(h % 24)
        let dLeft = Math.floor(d)

        if (minLeft < 10)
            minLeft = "0" + minLeft
        if (sLeft < 10)
            sLeft = "0" + sLeft
        if (hLeft < 10)
            hLeft = "0" + hLeft
        if (dLeft < 10)
            dLeft = "0" + dLeft

        return dLeft + " : " + hLeft + " : " + minLeft + " : " + sLeft
    }
    else if(remainingTime === 0){
        return '0'
    }
    else {
        return "Not valid date"
    }
}

let newCounterButton = document.getElementById("newCounterButton")

newCounterButton.addEventListener("click", function () { addCounter() })

function addCounter() {
    let newCounterValue = document.getElementById("newCounterValue").value
    let year = newCounterValue.substr(0, 4)
    let month = newCounterValue.substr(5, 2)
    let day = newCounterValue.substr(8, 2)
    let hour = newCounterValue.substr(11, 2)
    let minute = newCounterValue.substr(14, 2)
    let second = newCounterValue.substr(17, 2)

    if (timeToEvent(year, month - 1, day, hour, minute, second, 0) === 'Not valid date') {
        let notValidDate = document.getElementById("notValidDate")
        notValidDate.style.display = 'block'

    }
    else if (timeToEvent(year, month - 1, day, hour, minute, second, 0) === '0'){
        return  
    }
    else {
        let notValidDate = document.getElementById("notValidDate")
        notValidDate.style.display = 'none'

        let newCounter = document.createElement("div")
        newCounter.innerHTML = timeToEvent(year, month - 1, day, hour, minute, second, 0)
        newCounter.classList.add("oneCounter")

        let deleteCounterButton = document.createElement("button")
        deleteCounterButton.innerHTML = 'Delete Counter'
        deleteCounterButton.classList.add("deleteCounterButton")
        deleteCounterButton.addEventListener("click", function () { deleteCounter() })

        document.getElementById("counterContainer").appendChild(newCounter)
        document.getElementById("counterContainer").appendChild(deleteCounterButton)

        setInterval(changeTime, 1000)
        function changeTime() {
            if(timeToEvent(year, month - 1, day, hour, minute, second, 0) === "Not valid date"){
                newCounter.parentNode.removeChild(newCounter)
                deleteCounterButton.parentNode.removeChild(deleteCounterButton)
            }
            newCounter.innerHTML = timeToEvent(year, month - 1, day, hour, minute, second, 0)
        }
        function deleteCounter() {
            newCounter.parentNode.removeChild(newCounter)
            deleteCounterButton.parentNode.removeChild(deleteCounterButton)
        }
    }
}                   
let blackPage = document.getElementById("blackPage")
let bluePage = document.getElementById("bluePage")
let greenPage = document.getElementById("greenPage")
let redPage = document.getElementById("redPage")


blackPage.addEventListener("click", function () { changeColor('black') })
bluePage.addEventListener("click", function () { changeColor('blue') })
greenPage.addEventListener("click", function () { changeColor('green') })
redPage.addEventListener("click", function () { changeColor('red') })


function changeColor(color){
    let container = document.getElementById('container')
    
    container.style.backgroundColor = color
}

let plLanguage = document.getElementById("plLanguage")
let enLanguage = document.getElementById("enLanguage")

plLanguage.addEventListener("click", function () { changeLanguage('pl') })
enLanguage.addEventListener("click", function () { changeLanguage('en') })

function changeLanguage(language){
    if(language === 'pl'){
        let newCounterButton = document.getElementById("newCounterButton")
        newCounterButton.innerHTML = 'Dodaj Nowy Licznik'
        let deleteCounterButton = document.getElementsByClassName("deleteCounterButton")
        for(let i=0; i<deleteCounterButton.length; i++){
            deleteCounterButton[i].innerHTML = 'Usuń Licznik'
        }
    }
    else {
        let newCounterButton = document.getElementById("newCounterButton")
        newCounterButton.innerHTML = 'Add New Counter'
        let deleteCounterButton = document.getElementsByClassName("deleteCounterButton")
        for(let i=0; i<deleteCounterButton.length; i++){
            deleteCounterButton[i].innerHTML = 'Delete Counter'
        }
    }
}
