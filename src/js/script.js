

function load() {
	defaultCanvas();
	// randomizeSwatches();
	changeColor(activeHue,activeSat,activeLit);
}




function defaultCanvas() {
  $('#canvas svg *, #canvas svg g *').css("fill", "#ffffff" );
  $('#canvas svg *, #canvas svg g *').css( "stroke", "#000000");
  $('#canvas svg *, #canvas svg g *').css( "stroke-width", "1px");

  $('#canvas').css("width", ($(window).width() - 400 + "px"));
  $('#canvas').css("left", (500 + "px"));
  console.log($(window).width() - 460 + "px");

  // $('#canvas svg:first-child').addClass('activeSVG');

}

$('.swatch').click(function() {
	$('.swatch').attr("id","not");
	$(this).attr("id","activeSwatch");
	// changeColor(activeHue, activeSat, activeLit);

});


$("#canvas").on("click", ".SVGbox", function() {
	console.log("activeSVG");
	$('#canvas svg').attr("id","not");
	console.log($(this).children('svg'));
	$(this).children('svg').attr("id","activeSVG");
	$(this).children('svg').css("height", (document.clientHeight - 240 + "px"));

});




// $('#canvas svg *, #canvas svg g *').click(function(){

// 	if (eyeDrop) {
// 		activeColor = $(this).css('fill');
// 		// activeSwatch.value = activeColor;
// 		eyeDrop = false;
// 		$('#canvas svg').removeClass('eyeDrop');

// 		console.log(activeColor);
// 	}
// 	else {
//   $(this).css("fill", activeColor);
// 	}
// });


var brushing = setInterval(brush,50);

var bwidth = brushWidth.value;
function checkVal() {
	bwidth = brushWidth.value;
	clearInterval(brushing);
	console.log(10 + bwidth/2);
	brushing = setInterval(brush,(10 + bwidth/2));

}


var xi, yi;
function showCoords(event) {
	if (activeSVG !== undefined) {
		xi = event.pageX - ($('#activeSVG').offset().left);
    	yi = event.clientY - ($('#activeSVG').offset().top);	
    	console.log("x = " + xi + ", y = " + yi);	
	}
}


function brush() {
	if ( $('#activeSVG:active').length) {

	  var draw = SVG('activeSVG');
	  var circle = draw.circle(bwidth).attr({ fill: activeColor }).move(xi,yi);

	  // circle.attr({ cx: xi, cy: yi });
	  // group.add(circle);
	  // $('#activeSVG').
	}
}





var activeHue = 200;
var activeSat = 100;
var activeLit = 60;


//  TOOL KIT

var bucket = false;
var eyeDrop = false;
var eraser = false;
var marker = false;


$(document).on('keypress', function(event) {
	console.log(event.keyCode);

	// Activate Bucket
	if (event.keyCode == 98) {
		if (!bucket) {
			$('svg').addClass('bucket');
			$('#toolkit div').removeClass('activeTool');
			$('#bucketTool').addClass('activeTool');
		}
		bucket = true;
	}

	// Activate Eye Drop
	if (event.keyCode == 105) {
		if (!eyeDrop) {$('svg').addClass('eyeDrop');}
		eyeDrop = true;
	}

	// Activate Erasor
	if (event.keyCode == 101) {
		if (!eraser) {$('svg').addClass('eraser');}
		eraser = true;
	}

	// Activate Marker
	if (event.keyCode == 109) {
		if (!marker) {$('svg').addClass('marker');}
		marker = true;
	}


});




$('#colorPicker').mousedown(function () {


	x = event.clientX - colorPicker.offsetLeft;
	y = event.clientY - colorPicker.offsetTop;
	
	var w = colorPicker.clientWidth;
	var h = colorPicker.clientHeight;

	activeLit = Math.floor(100*x/w);
	activeHue = Math.floor(360*y/h);

	console.log("x = " + activeLit + ", y = " + activeHue);

	pickerButton.style.left = x + "px";
	pickerButton.style.top = y + "px";

	changeColor(activeHue, activeSat, activeLit);
});




function changeColor(hue,sat,lit) {
	activeColor = "hsl(" + hue + ", " + sat + "%, " + lit + "%)";
	console.log(activeColor);
	// activeSwatch.style.background = activeColor;
	// activeSwatch.style.boxShadow = "0 0 20px " + activeColor;

	pickerButton.style.background = activeColor;

	// activeSwatch.value = activeColor;
	// activeSwatch.innerHTML = activeColor;

	// if (activeLit > 50) {activeSwatch.style.color = 'black';}
	// else {activeSwatch.style.color = 'white';}




}



function randomizeSwatches() {
	for (var i = 0; i < swatches.children.length; i++) {

		activeHue = Math.floor(Math.random() * 360);
		activeLit = Math.floor(25 + Math.random() * 51);

		console.log(swatches.children[i]);

		activeColor =  "hsl(" + activeHue + ", " + activeSat + "%, " + activeLit + "%)";

		swatches.children[i].style.background = activeColor;
		swatches.children[i].style.boxShadow = "0 0 20px " + activeColor;
		swatches.children[i].value = activeColor;
		swatches.children[i].innerHTML = activeColor;
		pickerButton.style.left = activeHue + "px";
		pickerButton.style.top = activeLit + "px";

		if (activeLit > 50) {swatches.children[i].style.color = 'black';}
		else {swatches.children[i].style.color = 'white';}

	}
}