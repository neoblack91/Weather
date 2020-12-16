  const APIKey ="ac42371c43ac990da2890a1cf869a51b"
  var cityN= $("#searchB").val()
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
  "q=+" + cityN +"&appid=" + APIKey;

    let searchbtn =$(".searchbtn")
  $(".searchbtn").on('click',function(event){
      event.preventDefault();
    alert("yay it works")

    var cityN= $("#searchB").val()
    console.log($("#searchB"))

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
  "q=+" + cityN +"&appid=" + APIKey;

    $(".weatherCard").addClass("show")

    $.ajax({
      
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      // Display response in the console log
      console.log(response)
    });


 // calculate the response
   let tempD =(response.main.temp - 273.15)* 1.80 + 32
   console.log (Math.floor(tempD))
   console.log(response.wind.speed)
   getCurrentConditions(response)
   getCurrentForecast(response)
   listcity() 
 
      })
   function listcity() {

    let listR =$("<li>").addClass("list-group-item").text(cityN)
    $(".list").append(listR)
   }

   function getCurrentConditions(response) {
    let tempD =(response.main.temp - 273.15)* 1.80 + 32
    tempD= math.floor(tempD)

    $(".weatherCard").empty()

    const card = $("<div>").addClass("card")
    const cardB = $("<div>").addClass("card-body")
    const sCity = $("<h4>").addClass("card-title").text(response.name)
    const cityD = $("<h4>").addClass("card-title").text(date.tolocaleDateString('en-US'))
    const Temperture = $("<p>").addClass("card-text current-temp").text("temperature:"+tempD+ "°F")
    const humidity = $("<p>").addClass("card-text current-humidity").text("humidity:"+response.main.humidity+ "%")
    const wind = $("<p>").addClass("card-text current-wind").text("Wind Speed:"+response.wind.speed+ "MPH")
    const image = $("<img>").attr("src","https://openweathermap.org/img/w/"+ response.weather[0].icon+"png")

    //add to page
    cityN.append(cityD, image)
    cardB.append(sCity, Temperture, humidity, wind)
    card.append(cardB)
    $(".weatherCard").append(card)

   }
   $.ajax({
 
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    // Display response in the console log
    console.log(response)
    $("")


  });

    

  

  
