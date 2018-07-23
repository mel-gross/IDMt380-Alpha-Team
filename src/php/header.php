<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
	<title>Coloring Book Alpha</title>
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/anim.css">
	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">   <!-- Display Font: Lato -->
    <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great" rel="stylesheet">  <!-- Body Font: Fredericka the Great -->
</head>

<body onload="load()">

	<section class="nav" id="nav">


<!-- NOTE: research how to get relative link to home page -->
	<a href="index.php"><img id="title" src="img/auroraLogo.png" alt=""></a>

		<div class="hamburger" id="hamburger">
			<div class="menu" id="menu">
				<div id="help" class="icon hide">
					<img src="icon/auroraIcon.png" alt="">
				</div>
				<div id="user" class="icon">
					<?php include 'icon/login.svg'; ?>
				</div>
				<div id="Xout" class="icon hide">
					<?php include 'icon/Xout.svg'; ?>
				</div>
			</div>
		</div>
	</section>