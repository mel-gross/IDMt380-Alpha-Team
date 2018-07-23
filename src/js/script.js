

function load() {
	defaultCanvas();
	// randomizeSwatches();
	changeColor(activeHue,activeSat,activeLit);
}




function defaultCanvas() {
  $('#gallery svg *, #gallery svg g *').css("fill", "#ffffff" );
  $('#gallery svg *, #gallery svg g *').css( "stroke", "#000000");
  $('#gallery svg *, #gallery svg g *').css( "stroke-width", "1px");

  // $('#gallery svg:first-child').addClass('activeSVG');

}




$('#gallery svg *, #gallery svg g *').click(function(){

  $(this).css("fill", activeColor);
});


// var brushing = setInterval(brush,50);

// var bwidth = brushWidth.value;
// function checkVal() {
// 	bwidth = brushWidth.value;
// 	clearInterval(brushing);
// 	console.log(10 + bwidth/2);
// 	brushing = setInterval(brush,(10 + bwidth/2));

// }


// var xi, yi;
// function showCoords(event) {
// 	if (activeSVG !== undefined) {
// 		xi = event.pageX - ($('#activeSVG').offset().left);
//     	yi = event.clientY - ($('#activeSVG').offset().top);	
//     	console.log("x = " + xi + ", y = " + yi);	
// 	}
// }


// function brush() {
// 	if ( $('#activeSVG:active').length) {

// 	  var draw = SVG('activeSVG');
// 	  var circle = draw.circle(bwidth).attr({ fill: activeColor }).move(xi,yi);

// 	  // circle.attr({ cx: xi, cy: yi });
// 	  // group.add(circle);
// 	  // $('#activeSVG').
// 	}
// }





var activeHue = 200;
var activeSat = 100;
var activeLit = 60;


//  TOOL KIT

var bucket = false;
var eyeDrop = false;
var eraser = false;
var marker = false;


// $(document).on('keypress', function(event) {
// 	console.log(event.keyCode);

// 	// Activate Bucket
// 	if (event.keyCode == 98) {
// 		if (!bucket) {
// 			$('svg').addClass('bucket');
// 			$('#toolkit div').removeClass('activeTool');
// 			$('#bucketTool').addClass('activeTool');
// 		}
// 		bucket = true;
// 	}

// 	// Activate Eye Drop
// 	if (event.keyCode == 105) {
// 		if (!eyeDrop) {$('svg').addClass('eyeDrop');}
// 		eyeDrop = true;
// 	}

// 	// Activate Erasor
// 	if (event.keyCode == 101) {
// 		if (!eraser) {$('svg').addClass('eraser');}
// 		eraser = true;
// 	}

// 	// Activate Marker
// 	if (event.keyCode == 109) {
// 		if (!marker) {$('svg').addClass('marker');}
// 		marker = true;
// 	}


// });




$('#colorPicker').mousedown(function () {


	x = event.clientX - $('#colorPicker').offset().left;
	y = event.clientY - $('#colorPicker').offset().top;
	
	var w = colorPicker.clientWidth;
	var h = colorPicker.clientHeight;

	activeHue = Math.floor(360*x/w);
	activeLit = Math.floor(100*y/h);

	console.log("x = " + activeHue + ", y = " + activeLit);

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



// UI INTERACTIONS


$('.swatch').click(function() {
	$('.swatch').attr("id","not");
	$(this).attr("id","activeSwatch");
	// changeColor(activeHue, activeSat, activeLit);

});


$("#gallery").on("click", ".SVGbox", function() {

	$('#gallery .SVGbox').attr("id","not");
	$(this).attr("id","activeSVG");
	$('#toolkits, #help, #Xout').removeClass('hide');

	// $(this).children('svg').css("height", (document.clientHeight - 240 + "px"));

});


$('#Xout').click(function() {
	$('#gallery .SVGbox').attr("id","not");	
	$('#toolkits, #help, #Xout').addClass('hide');
});



$('#avatar, #help').click(function() {
	$('#helpModal').toggleClass('hide');
	var isHidden = $('#help').hasClass('hide');
	console.log(isHidden);
	if (isHidden) {
		$('#help').removeClass('hide');
	}
	else {
		$('#help').addClass('hide');
	}
});


$('#user').click(function() {
	$('#user').css('fill', 'green');
	$('#userModal').toggleClass('hide');
})


function hideThings() {
	$('#gallery .SVGbox').attr("id","not");		
	$('.modal, #toolkits, #Xout').addClass('hide');
};




$(window).scroll(function() {
	if ($(document).scrollTop() > 300) {
		$('#avatar').addClass('hide');
		$('#help').removeClass('hide');
	} else {
		$('#avatar').removeClass('hide');
		$('#help').addClass('hide');
	}
})