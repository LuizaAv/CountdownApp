let aimDate = "1 Jan 2023";

    const daysNode = document.getElementById("days-num");
    const hoursNode = document.getElementById("hours-num");
    const minutesNode = document.getElementById("minutes-num");
    const secondsNode = document.getElementById("seconds-num");
    const dateInput = document.getElementById("dateInput");
    const submitButton = document.getElementById("submitButton");

function countdownTimer(){
    const newYearDate = new Date(aimDate)
    const newDate = new Date()
    const todaysDate = newDate.getDay()

    const secondsTotal = (newYearDate - newDate) / 1000

    const days = Math.floor(secondsTotal/3600 / 24)
    const hours = Math.floor(secondsTotal / 3600) % 24
    const minutes = Math.floor(secondsTotal / 60) % 60
    const seconds = Math.floor(secondsTotal ) % 60

    
    
    daysNode.innerHTML = format(days)
    hoursNode.innerHTML = format(hours)
    minutesNode.innerHTML = format(minutes)
    secondsNode.innerHTML = format(seconds)

    //console.log(minutes)
}

submitButton.addEventListener("click", function(e){
    if(dateInput.value !== ""){
        aimDate = dateInput.value 
    }else{
        alert("The field must be filled")
    }
    //console.log(typeof(dateInput.value))
})

function format(data){
    return data < 10 ? (`0${data}`) : data 
}
countdownTimer()
setInterval(countdownTimer, 1000)