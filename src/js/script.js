

function load() {
	defaultCanvas();
	randomizeSwatches();
	changeColor(activeHue,activeSat,activeLit);
}



var activeHue = 200;
var activeSat = 100;
var activeLit = 60;



function defaultCanvas() {
  $('#gallery svg *, #gallery svg g *').css("fill", "#ffffff" );
  $('#gallery svg *, #gallery svg g *').css( "stroke", "#000000");
  $('#gallery svg *, #gallery svg g *').css( "stroke-width", "1px");
  $('#gallery svg:first-child').addClass('activeSVG');
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


var w = colorPicker.clientWidth;
var	h = colorPicker.clientHeight;


$('#colorPicker').mousedown(function () {
	mousePos();

	activeHue = Math.floor(360*x/w);
	activeLit = 100 - Math.floor(100*y/h);

	console.log("x = " + activeHue + ", y = " + activeLit);

	pickerButton.style.left = x + "px";
	pickerButton.style.top = y + "px";

	changeColor(activeHue, activeSat, activeLit);
});


function mousePos() {
	x = event.clientX - $('#colorPicker').offset().left;
	y = event.clientY - $('#colorPicker').offset().top;

}


function changeColor(hue,sat,lit) {
	activeColor = "hsl(" + hue + ", " + sat + "%, " + lit + "%)";
	console.log(activeColor);

	activeSwatch.style.background = activeColor;
	pickerButton.style.background = activeColor;
	activeSwatch.value = activeColor;


}



function randomizeSwatches() {
	for (var i = 0; i < swatches.children.length; i++) {
		activeHue = Math.floor(Math.random() * 360);
		activeLit = Math.floor(25 + Math.random() * 51);

		console.log(swatches.children[i]);

		activeColor =  "hsl(" + activeHue + ", " + activeSat + "%, " + activeLit + "%)";

		swatches.children[i].style.background = activeColor;
		swatches.children[i].value = activeColor;
		movePicker();

	}
}





$('.swatch').click(function() {
	$('.swatch').attr("id","not");
	$(this).attr("id","activeSwatch");
	var colorArray = getRgbArray($(this).css('background'), false, 'hsl');

	changeColor(colorArray[0], colorArray[1], colorArray[2]);
	console.log(colorArray);

	movePicker(colorArray[0],colorArray[2]);

});


function movePicker(left, top) {
	pickerButton.style.left = (w*left/360) + "px";
	pickerButton.style.top = (h*(1-top/100)) + "px";

	console.log("picker left = " + pickerButton.style.left + ", picker top = " + pickerButton.style.top);
}



// UI INTERACTIONS


$('#title').click(function(){closeModals()});
$('#userBtn').click(function(){openModal('#userModal')});
$('#helpBtn, #avatar').click(function(){openModal('#helpModal')});

$("#gallery").on("click", ".SVGbox", function() {
	openModal(this);
	$('#toolkits').removeClass('hide');
	title.src = "img/auroraLogo.png";
});




function openModal(modal) {
	if ($(modal).hasClass('activeModal') && (!$(modal).hasClass('SVGbox'))) {
		closeModals();
	}else {
		$('*').removeClass('activeModal');
		$(modal).addClass('activeModal');
	}
}

function closeModals() {
	$('*').removeClass('activeModal');
	$('.toolkits').addClass('hide');
	title.src = "img/auroraLogoL.png";
};




$(window).scroll(function() {
	if ($('#wrapper').scrollTop() > 300) {
		$('#avatar').addClass('hide');
		$('#helpBtn').removeClass('hide');
	} else {
		$('#avatar').removeClass('hide');
		$('#helpBtn').addClass('hide');

	}
})