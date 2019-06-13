var sports = ["Football", "Basketball", "Baseball", "Soccer", "Hockey", "Tennis", "Golf", "Fencing", "Ice Skating", "Wrestling", "Track and Field", "Volleyball", "Diving", "Rugby", "Swimming", "Rowing"]

var numOfGIfs = 10;
var rating = "PG";

function makeButtons(){
    for (var i = 0; i < sports.length; i++){
        var newButton = $("<button>");
        $("#button-container").append(newButton)
    }
}