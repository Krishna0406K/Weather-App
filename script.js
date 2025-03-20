const temperaturefield = document.querySelector(".temp")
const locationfield = document.querySelector(".location p")
const timefield = document.querySelector(".location span")
const conditionfield = document.querySelector(".condition p")
const searchlocation = document.querySelector(".searchfield")
const form = document.querySelector("form")
const searchbtn = document.querySelector(".searchbutton")

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("submitBtn").click();
    }
});


form.addEventListener("submit",searchforlocation);


let target = 'Mumbai'
let apikey = 'e130bec600ab45d6b1452208251903'

const fetchResults = async (targetLocation) => {

    let url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${targetLocation}&aqi=no`
    
    const res = await fetch(url)
    
    const data = await res.json()
    
    console.log(data)

    let locationName = data.location.name
    let time = data.location.localtime
    let temp = data.current.temp_c
    let condition = data.current.condition.text

    updateDetails(temp,locationName,time,condition)
}

function updateDetails(temp, locationName,time,condition){
    temperaturefield.innerText = temp;
    locationfield.innerText = locationName;
    conditionfield.innerText = condition;
    timefield.innerText = time;
}

function searchforlocation(e){
    e.preventDefault()
    let target = searchlocation.value

    fetchResults(target);
}

fetchResults(target)
