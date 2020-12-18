  const apiKey = "ac42371c43ac990da2890a1cf869a51b"

  // let Date =  newDate()

    // let searchbtn =$(".searchbtn")
    
  $(".searchbtn").on('click',function(event){
      event.preventDefault();
    // alert("yay it works")
    $("#WForecastH5").addClass("show")
    var cityN= $("#searchB").val()
  
    var QueryURL = "https://api.openweathermap.org/data/2.5/weather?"+"q="+cityN+"&appid="+ apiKey;
    console.log(QueryURL)
    $.ajax({
      url: QueryURL,
      method: "GET",
    }).then(function(response) {
      // Display response in the console log
      console.log(response)
      let tempD =(response.main.temp - 273.15)* 1.80 + 32
        console.log (Math.floor(tempD))
        console.log(response.wind.speed)
        getCurrentConditions(response)
        getCurrentForecast(response)
        listcity() 
      console.log(cityN)
      
    });

 })
 // calculate the response
    function listcity() {
    console.log ("hello from listcity")
    let listR =$("<li>").addClass("list-group-item").text(cityN)
    $("#list").append(listR)
   }

   function getCurrentConditions(response) {
    let tempD =(response.main.temp - 273.15)* 1.80 + 32
    tempD= Math.floor(tempD)
    console.log ("hello from getcurrentconditions")
    $("#today").empty()

    const card = $("<div>").addClass("card")
    const cardB = $("<div>").addClass("card-body")
    const sCity = $("<h4>").addClass("card-title").text(response.name)
    const cityD = $("<h4>").addClass("card-title").text(Date.tolocaleDateString('en-US'))
    const Temperture = $("<p>").addClass("card-text current-temp").text("temperature:"+tempD+ "°F")
    const humidity = $("<p>").addClass("card-text current-humidity").text("humidity:"+response.main.humidity+ "%")
    const wind = $("<p>").addClass("card-text current-wind").text("Wind Speed:"+response.wind.speed+ "MPH")
    const image = $("<img>").attr("src","https://openweathermap.org/img/w/"+ response.weather[0].icon+"png")

    //add to page
    cityN.append(cityD, image)
    cardB.append(sCity, Temperture, humidity, wind)
    card.append(cardB)
    $("#today").append(card)

   }
   function getCurrentForecast (){
      $.ajax({
          url: QueryURL,
          method: "GET",
        }).then(function(response) {
          console.log (response)
           $("#forecast").empty()

           let results = response.listR
          console.log(results)

          for (let r =0; r< results.length; r++){

            let day = number(results[r].dt_txt.split('-')[2].split(' ')[0])
            let hour = results[r].dt_txt.split('-')[2].split(' ')[1]

            if(results[r].dt_txt.index0f("12:00")!== -1){

            let temp =(results[r].main.temp- 273.15) * 1.80 +32
            let tempD =Math.floor(temp)
             const card = $("<div>").addClass("card-body");
             const cardB = $("<div>").addClass("card-body p-3 forecastBody")
             const cityD = $("<h4>").addClass("card-title").text(Date.toLocaleDateString('en-US'));
             const Temperature = $("<p>").addClass("card-text forecastTemp").text("Temperature: " + tempF + " °F");
             const humidity = $("<p>").addClass("card-text forecastHumidity").text("Humidity: " + results[i].main.humidity + "%");

             const image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + results[i].weather[0].icon + ".png")

            cardB.append(cityD, image, Temperature, humidity);
            card.append(cardB);
            $("#forecast").append(card);

            }
          }

        });

   }
  
    

  

  
