$(document).ready(function(){
//______begin readyShell
var interval;
function logToGrid() {
	var randomNumber = (Math.floor(Math.random() * 3) + 1);
	$("#grid" + randomNumber).addClass("hornless");
	enableEventListeners();
	setTimeout(function(){
		disableEventListeners();
		$("#grid" + randomNumber).removeClass("hornless");
		$("#grid" + randomNumber).removeClass("dorned");
	}, interval);
};
var intervalID;
function logToGridByInterval() {
	intervalID = setInterval(function() {
		logToGrid();
	}, interval * 1.1);
	};
var hornCount = 0;
function enableEventListeners() {
	$(".hornless").on("click", function(){
		disableEventListeners();
		$(".hornless").removeClass("hornless").addClass("dorned");
		hornCount++;
		console.log(hornCount);
		$("#hornCount").html(hornCount);
	});
};
function disableEventListeners() {
		$(".hornless").off("click");
};
//restart button
var clearMarker;
function halt(){
	$(".dropbtn").html("How Dorny Are You?");
	$(".start").html("Summon the Dorns!");
	clearInterval(intervalID);
	clearMarker = 1;
};
$("#halt").on("click", function(){
	halt();
	hornCount = 0;
	$("#hornCount").html(hornCount);

});
//"Select a Level" warning
$(".start").on("click", function(){
		if((isNaN(interval) == true) | (clearMarker == 1)) {
			greenToRed();
		} else {
			logToGridByInterval();
			$(".start").html("Click for More Dorns!")
		};
});
function greenToRed(){
	$(".start").html("Select a level!");
	$(".start").removeClass("start").addClass("red");
};
function redToGreen(){
	$(".red").removeClass("red").addClass("start");
	$(".start").html("Summon the Dorns!");
};
//difficulty level click events
$("#easy").on("click", function(){
	interval = 1500;
	$(".dropbtn").html("Level: Softy");
	redToGreen();
	clearMarker = 0;
});
$("#medium").on("click", function(){
	interval = 500;
	$(".dropbtn").html("Level: Intermediate");
	redToGreen();
	clearMarker = 0;
});
$("#hard").on("click", function(){
	interval = 10;
	$(".dropbtn").html("Level: DORN ADDICTION")
	redToGreen();
	clearMarker = 0;
});


//____________________________end readyShell
});
/*PROBLEMS:
counter registers clicks AFTER the adorning
*/