//css

$(".jumbotron").css({"background-color": "navy", "color": "white"});
$(".container").css({"background-color": "navy", "text-align": "center","color": "white"});
$(".btn-primary").css({"background-color": "transparent", "color": "black", "border": "transparent"});


var searchT = "";
var searchNum = 1;
var startYear = 2020;
$("#btn-primary").on("click", function() {
    var searchValue = $("#search-term").val();
    searchT = searchValue;
    console.log(searchValue);
    searchNum = $("#record-number").val();
    console.log(searchNum);
    startYear = $("#start-year").val();
    console.log(startYear);
});


