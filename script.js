//css

$(".jumbotron").css({"background-color": "navy", "color": "white"});
$(".container").css({"background-color": "navy", "text-align": "center","color": "white"});
$(".btn-primary").css({"background-color": "transparent", "color": "black", "border": "transparent"});


var searchT = "";
var searchNum = 1;
var searchyear = 2020;
$("#search-button").on("click", function() {
    var searchValue = $("#searchTerm").val();
    searchT = searchValue;
    console.log(searchValue);
    searchNum = $("#searchNum").val();
    console.log(searchNum);
    searchyear = $("#searchYear").val();
    console.log(searchyear);
});