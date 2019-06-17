window.addEventListener('load', function () {

    //bind event on GET WEATHER button
    document.querySelector("#get-weather").addEventListener('click', getWeather);

});

getWeather = () => {
    //get values of city and country from form 
    const city = document.getElementById("city");
    const country = document.querySelector("#country");

    if (!city.value || !country.value) {
        alert("Field cannot be empty")
        return
    }

    const apiData = getApiData(city.value, country.value).then(data => {
        fillData(data);
    })
}
async function getApiData(city, country) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=c4b20f7d52ca4ef9504a91d5a438b32a&units=metric`);
    const data = await response.json();
    return data;
}
fillData = (data) => {

    document.getElementById("location").innerText = data.name;
    document.getElementById("temperature").innerText = data.main.temp;
    document.getElementById("humidity").innerText = data.main.humidity;
    document.getElementById("description").innerText = data.weather[0].description;
}