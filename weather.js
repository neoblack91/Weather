// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {

//     // Create CODE HERE to Log the queryURL
//     console.log (APIKey)
//     console.log(response)
//     // Create CODE HERE to log the resulting object
//     // Create CODE HERE to calculate the temperature (converted from Kelvin)
//     console.log((response.main.temp)-273);
//     // Create CODE HERE to transfer content to HTML
//     // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
//     // Create CODE HERE to dump the temperature content into HTML
//     var queryURL = "pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={ac42371c43ac990da2890a1cf869a51b}";
//     console.log (queryURL)
//   });
  //search work
  let searchbtn =$(".searchbtn")
  $(".searchbtn").on('click',function(){
      alert("yay it works")
  })