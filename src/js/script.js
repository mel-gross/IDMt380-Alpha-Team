function load() {
	$("[data-name='outline'], [data-name='outlines'], #outline").css('pointer-events', 'none');
	$('svg').addClass('svg');
}



var activeHue = 200;
var activeSat = 100;
var activeLit = 60;

var theScale;


function clearImage(which) {
	if (which === 'all') {
		if (confirm("Are you sure you want to CLEAR ALL of your paintings? \nThis won't effect the paintings you've already saved.")) {
			$('.SVGbox .innerBox svg g g *').css('fill', '#ffffff');
		}
	} else {
		var toClear = $(which).children[0].children[0].children;
		console.log(which);
		for (var i = 0; i < toClear.length; i++) {
			for (var j = 0; j < toClear[i].children.length; j++) {
				$(toClear[i].children[j]).css('fill', '#ffffff');
			}
		}
	}
}

// $('#gallery svg *, #gallery svg g *').mousedown(function(){
//   $(this).css("fill", activeColor);
// });


$('g g').on('click', function () {
	setUndo(this.children);
	if (backCount > 0) {
		for (var i = 0; i < backCount.length; i++) {
			priorMoves.splice(0, 1);
		}
	}
	backCount = 0;
	var selector = '#' + this.id + ' *';
	$(selector).css('fill', activeColor);
});


function clearImage(which) {
	if (which === 'all') {
		if (confirm("Are you sure you want to CLEAR ALL of your paintings? \nThis won't effect the paintings you've already saved.")) {
			$('.SVGbox .innerBox svg g g *').css('fill', '#ffffff');
		}
	} else {
		var toClear = $(which).children[0].children[0].children;
		console.log(which);
		for (var i = 0; i < toClear.length; i++) {
			for (var j = 0; j < toClear[i].children.length; j++) {
				$(toClear[i].children[j]).css('fill', '#ffffff');
			}
		}
	}
}
// $('#gallery svg *, #gallery svg g *').hover(function(){
// 	if (down) {
// 	  	$(this).css("fill", activeColor);		
// 	}
// });


function scaleVal(incr) {
	theScale *= incr;
	console.log(theScale);
	// $('.activeModal svg').css('transform','scale(' + (scaleTo/20) + ')');
	$('.activeModal svg').css('height', theScale + 'px');
}


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





//  HOT KEYS
var swatchI = 0;
var imageI = 0;


$(document).on('keypress', function (event) {

// q = Exit out of modals
	log(event.keyCode);
	if (event.keyCode === 113) {
		closeModals();
	}


// ,/. = Zoom in/out
	if (event.keyCode === 44 ) {
		scaleVal(0.9);
	}
	if (event.keyCode === 46 ) {
		scaleVal(1.1);
	}

// c = Show color picker
	if (event.keyCode === 99 ) {
	if ($('#toolkits').hasClass('showRainbow')) {
        $('#toolkits').removeClass('showRainbow');		
	} else {
		showRainbow();
	}
	}

// ^W = Wipe ALL images
	if (event.keyCode === 87) {
		clearImage('all');
	}

// w = Wipe open image
	if (event.keyCode === 119) {
		clearImage('.SVGbox.activeModal');
	}

// u/i = Open account/info pages
	if (event.keyCode === 105) {
		openModal('#helpModal');
	}
	// if (event.keyCode === 117) {
	// 	openModal('#userModal');
	// }


// 1-0 = Switch images

for (var i = 0; i < gallery.children.length; i++) {
if (event.keyCode === (49 + i)) {
	if (event.keyCode < 58) {
	openImage(gallery.children[i]);		
	}
}
if (event.keyCode === 48) {
	openImage(gallery.children[9]);
}
}


// h = Hue shift (+)
if (event.keyCode === 104) {
	if (activeHue < 360) {
		activeHue += 10;
	} else {
		activeHue = 0;
	}
}
// ^H = Hue shift (-)
if (event.keyCode === 72) {
	if (activeHue > 0) {
		activeHue -= 10;
	} else {
		activeHue = 360;
	}
}
// b = Brightness shift (+)
if (event.keyCode === 98) {
	if (activeLit < 100) {
		activeLit += 5;
	}else {
		activeLit = 0;
	}
}
// ^B = Brightness shift (-)
if (event.keyCode === 66) {
	if (activeLit > 0) {
		activeLit -= 5;
	} else {
		activeLit = 100;
	}
}
idleTime = 0;
changeColor(activeHue, activeSat, activeLit);
movePicker(activeHue, activeLit);

// n = back a Swatch
if (event.keyCode === 86) {
	if (swatchI <= 0) {
		swatchI = swatches.children.length-1;
	} else {swatchI--;}
	switchSwatch(swatches.children[swatchI]);
}

// m = forward a Swatch
if (event.keyCode === 118) {
	if (swatchI >= swatches.children.length-1) {
		swatchI = 0;
	} else {swatchI++;}
	// console.log(swatches.children[2]);
	switchSwatch(swatches.children[swatchI]);
}


// Toggle Grouping

if (event.keyCode === 103) {
	if (!groupMode.checked) {
		groupMode.checked = true;
	}
	else {
		groupMode.checked = false;
	}
}

// z = Undo
	if (event.keyCode === 122) {
		undo();
	}

});

$('.eyeDrop path, .eyeDrop * path').click(function () {
	log();
});


var x, y, w, h;

document.addEventListener('mousemove', onMouseUpdate, false);

var down = false;
$('#colorPicker, .SVGbox').mousedown(function () {
	down = true;
	idleTime = 0;
});

$('#colorPicker').click(function () {
	idleTime = 0;
	x = event.clientX - $('#colorPicker').offset().left;
	y = event.clientY - $('#colorPicker').offset().top;
	clickMove(x, y);
});

$('#colorPicker, .SVGbox').mouseup(function () {
	down = false;
});
// $('#colorPicker, .SVGbox').mouseout(function() {down = false;});

function onMouseUpdate(e) {
	x = e.clientX - $('#colorPicker').offset().left;
	y = e.clientY - $('#colorPicker').offset().top;

	if (x > 0 && y > 0 && down) {
		idleTime = 0;
		clickMove(x, y);
	}

}

function clickMove(x, y) {
	activeHue = Math.floor(360 * x / w);
	activeLit = 100 - Math.floor(100 * y / h);

	pickerButton.style.left = x + "px";
	pickerButton.style.top = y + "px";
	changeColor(activeHue, activeSat, activeLit);
}


function changeColor(hue, sat, lit) {
	activeColor = "hsl(" + hue + ", " + sat + "%, " + lit + "%)";
	console.log(activeColor);

	activeHue = hue;
	activeLit = lit;
	activeSwatch.style.background = activeColor;
	swatches.style.background = activeColor;
	pickerButton.style.background = activeColor;

}



var swatchOpened = false;



var schemes = [];
for (var i = 0; i < palettes.children.length; i++) {
	let aScheme = [];
	for (var j = 0; j < palettes.children[i].children.length; j++) {
		aScheme.push(palettes.children[i].children[j].innerHTML);
	}
	schemes.push(aScheme);
	var first = palettes.children[i].children[0].innerHTML;
	var second = palettes.children[i].children[1].innerHTML;
	var third = palettes.children[i].children[2].innerHTML;
	var fourth = palettes.children[i].children[3].innerHTML;
	palettes.children[i].style.background = "linear-gradient(90deg, " + first + " 0%, " + second + " 33%, " + third + " 67%, " + fourth + " 100%)";
}

var theScheme = schemes[Math.floor(Math.random() * schemes.length)];



$('#palettes').on('click', function () {
	$(this).toggleClass('open');
});


$('.palette').on('click', function () {
	changePalette(this)
});

function changePalette(that) {
	console.log(that);
	theScheme = [];
	if (that !== undefined) {
		console.log(that);
		for (var i = 0; i < that.children.length; i++) {
			theScheme.push(that.children[i].innerHTML);
		}
	}
	setSwatches(theScheme);
}



function setSwatches(theScheme) {

	// changePalette();
	console.log(theScheme);

	for (var i = 0; i < $('.swatch').length; i++) {

		// activeHue = Math.floor(Math.random() * 360);
		// activeLit = Math.floor(25 + Math.random() * 51);

		activeHue = getRgbArray(theScheme[i], false, 'hsl')[0];
		activeLit = getRgbArray(theScheme[i], false, 'hsl')[2];

		console.log(swatches.children[i]);

		activeColor = "hsl(" + activeHue + ", " + activeSat + "%, " + activeLit + "%)";

		swatches.children[i].style.background = activeColor;
		swatches.children[i].value = activeColor;
		changeColor(activeHue, activeSat, activeLit);
		movePicker();

	}
}



$('.swatch').click(function(){switchSwatch(this)});

function switchSwatch(which) {
	console.log(which);
	$('.swatch').attr("id","not");
	$(which).attr("id","activeSwatch");
	var colorArray = getRgbArray($(which).css('background'), false, 'hsl');
	idleTime = 0;
	changeColor(colorArray[0], colorArray[1], colorArray[2]);
	movePicker(colorArray[0],colorArray[2]);
}


// Show color picker when you click a swatch, and hide it when you idle 

var idleInterval;
var idleTime = 0;

$('#swatches').on('doubletap', function (event) {
	showRainbow();
});

$('#swatches').dblclick(function () {
	showRainbow();
});

function showRainbow() {
	$('#toolkits').addClass('showRainbow');
	clearInterval(idleInterval);
	idleInterval = setInterval(timer, 1000);
}


$('.SVGbox').click(function () {
	$('#toolkits').removeClass('showRainbow');
	$('#palettes').removeClass('open');

});

function timer() {
	idleTime++;
	if (idleTime > 3) {
		$('#toolkits').removeClass('showRainbow');
		idleTime = 0;
	}
}


function movePicker(left, top) {
	w = colorPicker.clientWidth;
	h = colorPicker.clientHeight;
	pickerButton.style.left = (w * left / 360) + "px";
	pickerButton.style.top = (h * (1 - top / 100)) + "px";

	console.log("picker left = " + pickerButton.style.left + ", picker top = " + pickerButton.style.top);
}



// UI INTERACTIONS


$('#title').click(function () {
	closeModals()
});
$('#userBtn').click(function () {
	openModal('#userModal')
});
$('#helpBtn').click(function () {
	openModal('#helpModal')
});


$("#gallery").on("click", ".SVGbox", function() {

	if ($(this).hasClass('activeModal')) {
	console.log('already open');		
	} else {
		openImage(this);
	}
});

function openImage(that) {
	openModal(that);
	$('#toolkits').removeClass('hide');
	title.src = "img/auroraLogo.png";
	nav.style.background = 'transparent';
	$('#title, .icon svg').css('filter', 'none');
	$('.icon svg path').css('fill', '#2f2f2f');

	if (!swatchOpened) {
		// let selector = " " + that + " "
		theScale = parseInt($(that).css('height'), 10);
		setTimeout(function () {
			setSwatches();
		}, 500);
		swatchOpened = true;
	}
}



function openModal(modal) {
	if ($(modal).hasClass('activeModal') && (!$(modal).hasClass('SVGbox'))) {
		closeModals();
	} else {
		title.src = "img/auroraLogoL.png";
		$('.SVGbox svg').css('height', '15rem');
		$('*').removeClass('activeModal');
		if ($(modal).is('#userModal')) {			
			$('#userBtn svg path').css('fill','#ffba40');
			// $('#helpBtn svg path').css('fill','#f5f5f5');
		}
		if ($(modal).is('#helpModal')) {			
			$('#helpBtn svg path').css('fill','#86fff7');
			$('#helpBtn img').attr('src','icon/helpOpen.png');
}

		$(modal).addClass('activeModal');
}

function closeModals() {
	$('.activeModal svg').css('height','15rem');
	$('*').removeClass('activeModal');
	$('.toolkits').addClass('hide');

	title.src = "img/auroraLogoL.png";
	nav.style.background = 'linear-gradient(rgba(0,0,10,.7) 0%, transparent)';

	$('#helpBtn img').attr('src','icon/help.png');
	$('#userBtn svg path, #helpBtn svg path').css('fill', '#f5f5f5');
	$('#title, .icon svg').css('filter', 'drop-shadow(0 0 10px black)');

	priorMoves = [];
	backCount = 0;
};




// Quick Console Log

function log(log) {
	console.log(log);
}


var priorMoves = [];
var backCount = 0;

function setUndo(el) {

	let lastMove = [];
	for (var i = 0; i < el.length; i++) {
		let lastMoves = new Object();
		lastMoves.el = el[i];
		if (el[i].style.fill !== "") {
			lastMoves.fillColor = el[i].style.fill;
		} else {
			lastMoves.fillColor = "#ffffff";
		}
		lastMove.push(lastMoves);
	}
	//Adding last move to an array of past actions
	// priorMoves.push(lastMove);
	if (el[0].style.fill !== lastMove[0].fillColor) {
		priorMoves.unshift(lastMove);

		//Number sets length of history array. Limits how much memory app will take up
		if (priorMoves[39]) {
			priorMoves.length = 40;
		}
	}
}


function undo() {
	if (priorMoves.length) {
		for (var i = 0; i < priorMoves[backCount].length; i++) {
			log(priorMoves[backCount][i].fillColor);

			$(priorMoves[backCount][i].el).css('fill', priorMoves[backCount][i].fillColor);
		}
	}
	if (backCount < priorMoves.length - 1) {
		backCount++;
	}

}



//random avatar function
var image = new Array();
image[0] = "src/img/avatars/avatar1.png";
image[1] = "src/img/avatars/avatar2.png";
image[2] = "src/img/avatars/avatar3.png";
image[3] = "src/img/avatars/avatar4.png";
image[4] = "src/img/avatars/avatar5.png";
image[5] = "src/img/avatars/avatar6.png";
var size = image.length
var x = Math.floor(size * Math.random())

$('#randomAvatar').attr('src', image[x]);