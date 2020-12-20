var apiKey = "ac42371c43ac990da2890a1cf869a51b"
let date = luxon.DateTime.local()
  
// console.log(date.c)
// console.log(date.c[1])
  let searchbtn =$(".searchbtn")
  var cityN= $("#searchB").val()
  
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
        getCurrentConditions(cityN,response)
        // getCurrentForecast(cityN,response)
        listcity() 
      console.log(cityN)
      
    });

 })
 // list of cities
    function listcity() {
    console.log ("hello from listcity")
    let listR =$("<li>").addClass("list-group-item").text(cityN)
    $("#list").append(listR)
   }

   function getCurrentConditions(cityN, response) {

    let tempD =(response.main.temp - 273.15)* 1.80 + 32
    tempD= Math.floor(tempD)
    console.log ("hello from getcurrentconditions")
    $("#today").empty()

    var sCity = $("<h4>").addClass("card-title").text(response.name)
    var cityD = $("<h4>").addClass("card-title").text(date.c.month)
    var Temperture = $("<p>").addClass("card-text current-temp").text("temperature:"+tempD+ "°F")
    var humidity = $("<p>").addClass("card-text current-humidity").text("humidity:"+response.main.humidity+ "%")
    var wind = $("<p>").addClass("card-text current-wind").text("Wind Speed:"+response.wind.speed+ "MPH")
    var image = $("<img>").attr("src","https://openweathermap.org/img/w/"+ response.weather[0].icon+".png")
    var lat = $("<p>").addClass("card-text current-Latitude").text("Latitude:"+ response.coord.lat ) 
    var lon = $("<p>").addClass("card-text current-Longitude").text("Longitude:"+ response.coord.lon ) 
    //add to page
    $("#today").append(sCity,cityD, image, Temperture, humidity, wind,lat,lon)

        }
        
       
   function getCurrentForecast(cityN,response){
var queryFC5 ="https://api.openweathermap.org/data/2.5/forecast?q=" + cityN + apiKey;

          $.ajax({
                url: queryFC5,
                method: "GET",
              }).then(function(response) {
              var lat = response.coord.lat;
              var lon = response.coord.lon;
               
            })
            
    let tempD =(response.main.temp - 273.15)* 1.80 + 32
    tempD= Math.floor(tempD)
    console.log(queryFC5)
    $("Forecast").empty()

    var sCity = $("<h4>").addClass("card-title").text(response.name)
    var cityD = $("<h4>").addClass("card-title").text(date.c.month)
    var Temperture = $("<p>").addClass("card-text current-temp").text("temperature:"+tempD+ "°F")
    var humidity = $("<p>").addClass("card-text current-humidity").text("humidity:"+response.main.humidity+ "%")
    var wind = $("<p>").addClass("card-text current-wind").text("Wind Speed:"+response.wind.speed+ "MPH")
    var image = $("<img>").attr("src","https://openweathermap.org/img/w/"+ response.weather[0].icon+".png")
    var lat = $("<p>").addClass("card-text current-Latitude").text("Latitude:"+ response.coord.lat ) 
    var lon = $("<p>").addClass("card-text current-Longitude").text("Longitude:"+ response.coord.lon ) 
    //add to page
    $("Forecast").append(sCity,cityD, image, Temperture, humidity, wind,lat,lon)

    var cityD = new Date(date);
    var repeats = (new Date(date)).setDate(date.getDate() + (i*7))
   

  }    
  
  