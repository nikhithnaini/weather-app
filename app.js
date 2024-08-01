const a = document
  .querySelector("#city")
  .addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
      weather();
    }
  });
async function weather() {
  const city = document.querySelector("#city").value;
  const apiKey = "d36dade6eb56c6916ae93094731a6762";
  const url1 = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
  const resp = await fetch(url1);
  const geo = await resp.json();
  const lat = geo[0].lat;
  const lon = geo[0].lon;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  const data = await fetch(url);
  const details = await data.json();
  console.log(details);
  document.querySelector(".temperature").innerHTML = details.main.temp;
  document.querySelector(".cityname").innerHTML = city;
  const condition = details.weather[0].main;
  if (condition == "Clouds")
    document.querySelector(".main-image").src = "./images/cloudy (1).png";
  else if (condition == "Rain") {
    document.querySelector(".main-image").src = "./images/cloudy.png";
  } else {
    document.querySelector(".main-image").src = "./images/sun.png";
  }
  document.querySelector(".wind-details").innerHTML = details.wind.speed;
  // weather[0].main;
  document.querySelector(".humidity-details").innerHTML = details.main.humidity;
}
