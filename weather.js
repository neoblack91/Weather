  const APIKey ="&appid=ac42371c43ac990da2890a1cf869a51b"
  var cityN= $("#searchB").val()
  // var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id="+cityN+"&appid=+" + APIKey;

    let searchbtn =$(".searchbtn")
    
  $(".searchbtn").on('click',function(event){
      event.preventDefault();
    // alert("yay it works")
    $("#WForecastH5").addClass("show")

    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=+"+cityN+"&appid=" + APIKey;

    $.ajax({
      
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      // Display response in the console log
      console.log(response)
      let tempD =(response.main.temp - 273.15)* 1.80 + 32
        console.log (Math.floor(tempD))
        console.log(response.wind.speed)
        getCurrentConditions(response)
        getCurrentForecast(response)
        listcity() 

    });

 })
 // calculate the response
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
   function getCurrentForecast (){
      $.ajax({
      
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          // Display response in the console log
          
          $("#WForecast").empty()

           let results = response.listR
          console.log(results)

          for (let r =0; r< results.length; r++){
            let temp =(results[r].main.temp- 273.15) * 1.80 +32
            let tempD =Math.floor(temp)
             card = $("<div>").addClass("card col-md-2 ml-4 bg-primary text-white");
             cardB = $("<div>").addClass("card-body p-3 WForecastBody")
             cityD = $("<h4>").addClass("card-title").text(date.toLocaleDateString('en-US'));
             Temperature = $("<p>").addClass("card-text forecastTemp").text("Temperature: " + tempF + " °F");
             humidity = $("<p>").addClass("card-text forecastHumidity").text("Humidity: " + results[i].main.humidity + "%");

             image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + results[i].weather[0].icon + ".png")

            cardB.append(cityD, image, Temperature, humidity);
            card.append(cardB);
            $("#WForecast").append(card);


          }

        });

   }
  

    

  

  
