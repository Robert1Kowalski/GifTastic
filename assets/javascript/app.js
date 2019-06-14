

var sports = ["Football", "Basketball", "Baseball", "Soccer", "Hockey", "Tennis", "Golf", "Fencing", "Ice Skating", "Wrestling", "Track and Field", "Volleyball", "Diving", "Rugby", "Swimming", "Rowing"];

var numOfGIfs = 10;
var rating = "PG";

function makeButtons() {
    for (var i = 0; i < sports.length; i++) {
        var newButton = $("<button>");
        // console.log(newButton)
        newButton.addClass("btn");
        newButton.attr("data-name", sports[i]);
        newButton.addClass("sports-button");
        newButton.text(sports[i]);
        $("#button-container").append(newButton);
}
}
makeButtons();

$("#button-container").on("click", ".sports-button", function (event) {
    
    var search = $(this).text()
    // console.log(search)
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&limit=10&rating&api_key=WXFWHHqIptgDBRFNzRlWCf9t6urpmNS8"
    console.log(queryURL)
    $.ajax({ url: queryURL, method: 'GET' })
        .done(function (response) {
            // console.log(response)
            var newDiv = $("<div>");
            for (var i in response.data) {
                var responseElement = response.data[i]
                console.log(responseElement)
                var newDiv = $("<div class = 'ratingsHolder'>")
                newDiv.append("<p>Rating: " + responseElement.rating + "</p>")

                var newImage = $("<img>");
                newImage.attr({
                    "src": responseElement.images.original_still.url,
                    "data-still": responseElement.images.original_still.url,
                    "data-animate": responseElement.images.original.url,
                    "data-state": "still",
                    "class": "gif"

                });
                newDiv.append(newImage);

                $("#gif-container").append(newDiv);
            }
        }) //this is someone else's code I found online and it works so I borrowed it.  But I didn't want to get in trouble for plagerism so I left my own attempt pseudocoded below.
        //link to code :https://stackoverflow.com/questions/44298501/how-to-pause-and-start-gif-using-jquery-ajax#comment75603272_44298846
        $('body').on('click', '.gif', function() {
            var src = $(this).attr("src");
          if($(this).hasClass('playing')){
             //stop
             $(this).attr('src', src.replace(/\.gif/i, "_s.gif"))
             $(this).removeClass('playing');
          } else {
            //play
            $(this).addClass('playing');
            $(this).attr('src', src.replace(/\_s.gif/i, ".gif"))
          }
        });
    // $(".gif").on("click", function () {
    //     if ($(this).attr("state") === "still") {
    //         $(this).attr("state", "animated");
    //         $(this).attr("src", $(this).attr("animated-data"));
    //     }
    //     else {
    //         $(this).attr("state", "still");
    //         $(this).attr("src", $(this).attr("still-data"));
    //     }
    // });
    
});




	newSport = " "

       function searchButton() {
        if (newSport = ($.stringify("#sport-id").val().trim())){
            (($("#submit").on("click", function(event){
            var newButton2 = $("<button>");
       
           
            
            newButton2.text(newSport);
            $("#button-container").append(newButton2);
        

        })))}
        else {
            console.log("nothing")
        }
    }
    ///PseudoCode:  Trying to build a function to cover the search button 
    //  I tried to build an if statement that says if var newSport === the returned text value, create an on-click event that appends the new button to the button group. 


    // var newSports is set equal to the user text input

    //.val extracts the text, stringify turns it back into a string

    //newSport is set equal to an empty string

    //My logic was that if a (string===string) returns true; and the code would execute. 

    


    

        
    //         event.preventDefault();
    //         var newSport === ($("#sport-id").val().trim())
    //     }))
    //     (($("#submit").on("click", function(event){
        
             

    //     var newButton2 = $("<button>");
        
    //         newButton2.addClass("btn2");
    //         newButton2.attr("data-name", newSport[i]);
    //         newButton2.addClass("sports-button2");
    //         newButton2.text(newSport);
    //         $("#button-container").append(newButton2);
        
    // //  else {
    // //     console.log(error.code)
    // // }

        
    //     searchButton()
        
        
        
        // var newButton = $("<button>")
        // $(newButton).addClass("button-class")
        // $(newSport).text(".button-class")
        // $("#button-container").append(newSport)
    


    
    // cannot get .val() in newSport to populate the button