function handleKeyPress(event){
  if (event.keyCode === 13){
      document.getElementById("myBtn").click();
  }
}

function submitInput(){

}


const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {

  const APIKey = "eb51ce0f20a9b4df663dfec5b9de9712";
  const city = document.querySelector('.search-box input').value;

  if(city == '')
    return;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {

    const image = document.querySelector('.weather-box img');
    const temperature = document.querySelector('.weather-box .temperature');
    const description = document.querySelector('.weather-box .description');
    const humidity = document.querySelector('.weather-details .humidity span');
    const wind = document.querySelector('.weather-details .wind span');

    switch(json.weather[0].main) {
      case 'Clear':
        image.src = 'sunny.png';
        break;

      case 'Rain':
        image.src = 'rainy.png';
        break;

      case 'Snow':
        image.src = 'snowy.png';
        break;

      case 'Mist':
        image.src = 'foggy.png';
        break;

      case 'Clouds':
        image.src = 'cloudy.png';
        break;

      default:
        image.src = 'cloudy.png';
      }

      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;



  });
});

