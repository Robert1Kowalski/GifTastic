

var sports = ["Football", "Basketball", "Baseball", "Soccer", "Hockey", "Tennis", "Golf", "Fencing", "Ice Skating", "Wrestling", "Track and Field", "Volleyball", "Diving", "Rugby", "Swimming", "Rowing"];

var numOfGIfs = 10;
var rating = "PG";

function makeButtons(){
    for (var i = 0; i < sports.length; i++){
        var newButton = $("<button>");
        // console.log(newButton)
        newButton.addClass("btn");
        newButton.addClass("sports-button");
        newButton.text(sports[i]);
        $("#button-container").append(newButton);
      


        
    }
 
    // $(".cartoon-button").unbind("click");

    // $("cartoon-button").on("click", function (){
    //     $("#gif-container").empty();
       
    // })
  
}
makeButtons();

$("#button-container").on("click", ".sports-button", function (event){
    
    var search = $(this).text()
    console.log(search)
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=WXFWHHqIptgDBRFNzRlWCf9t6urpmNS8"
    console.log(queryURL)
    $.ajax({url:queryURL, method: 'GET'})
    .then(function(response){
        console.log(response)
    })  
})







    



















