<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
	<title>Coloring Book Alpha</title>
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/anim.css">
	<!-- V V Replace with local font folder V V -->
	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great" rel="stylesheet">
</head>

<body onload="load()">

<div id="wrapper" class="wrapper">

	<section class="nav" id="nav">


<!-- NOTE: research how to get relative link to home page -->
	<img id="title" src="img/auroraLogoL.png" alt="">

		<div class="hamburger" id="hamburger">
			<div class="menu" id="menu">
				<div id="helpBtn" class="icon">
					<?php include 'icon/help.svg'; ?>
				</div>
				<div id="userBtn" class="icon">
					<?php include 'icon/login.svg'; ?>
				</div>
				<div id="XoutBtn" class="icon hide">
					<?php include 'icon/Xout.svg'; ?>
				</div>
			</div>
		</div>
	</section>