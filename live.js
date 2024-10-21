const apiKey="5a3b0ad7c4b2f0aa77e241829042afab";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");

let weatherIcon=document.querySelector(".weather-icon");

async function checkweather(city)
{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML =data.wind.speed + "km/hr";

    
    if(data.weather[0].main=="Clouds")
{
    weatherIcon.src="Images/clouds.png"
}
else if(data.weather[0].main=="Clear")
{
    weatherIcon.src="Images/clear.png"
}
    else if(data.weather[0].main=="Haze")
    {
        weatherIcon.src="haze.png"
    }
else if(data.weather[0].main=="Drizzle")
{
    weatherIcon.src="Images/drizzle.png"
}
else if(data.weather[0].main=="Mist")
    {
        weatherIcon.src="Images/mist.png"
    }  
    document.querySelector(".weather").style.display="block";
}
searchBtn.addEventListener("click", ()=>{

    checkweather(searchBox.value);
})
searchBox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        checkweather(searchBox.value);
         }
});

