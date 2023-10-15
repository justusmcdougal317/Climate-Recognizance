var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListner('click',function(){
 fetch(https://api.openweathermap.org/data/3.0/onecall?q='+inputValue.value+'&appid='6440c5c5dab4ca3a400164ecfcf30c6e')
  .then(response => response.json())
  .then(data => {
    var nameValue = data['name'];
    var tempValue = data['main']['temp']
    var descValue = data['weather'][0]['description'];
 
    name.innerHTML =nameValue;
    temp.innerHTML =tempValue;
    desc.innerHTML =descValue;
})


  .catch(err => alert("Wrong city name!"))
