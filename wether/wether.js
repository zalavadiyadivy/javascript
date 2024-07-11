const weather = () => {
  fetch(
    "http://api.weatherapi.com/v1/current.json?key=27f7477ad44e4c80ab995818240407&q=india&aqi=no"
  )
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      console.log(data.location.country);
      console.log(data.location.name);

      document.getElementById("country").innerHTML = data.location.country;
      document.getElementById("name").innerHTML = data.location.name;
      document.getElementById("tz").innerHTML = data.location.tz_id;
      document.getElementById("temp_c").innerHTML = data.location.temp_c;
      document.getElementById("temp_f").innerHTML = data.location.temp_f;
      document.getElementById("text").innerHTML = data.location.text;
    })
    .catch((err) => console.log(err));
};
