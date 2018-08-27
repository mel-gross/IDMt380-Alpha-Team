

<section class="userModal modal" id="userModal">
	<h1 class="modalTitle" id="userTitle">Account</h1>

	<div class="innerUserModal">
	<form id="signIn" class="signIn" action="">
	<h2 class="login_header" id="login_header">Log In</h2>
		<input class="input_box" type="text" id="username" maxlength="30" placeholder="Email">
		<input class="input_box" type="password" new-password id="password" minlength="8" maxlength="15" placeholder="Password (at least 8 characters)">
		<button class="infoBtn hide" id="oldSubmit">Sign In</button>
		<input class="input_box" type="password" new-password id="passwordConfirm" minlength="8" maxlength="15" placeholder="Confirm Password" onclick="matchPW()">
		<button class="infoBtn" id="newSubmit" onclick="preventdefault()">Sign Up</button>
	</form>
	<div class="info hide" id="info">
	<h2 class="yourName" id="yourName">Your Info</h2>
		<img class="yourImg" id="randomAvatar" src="" alt="Profile Image">
		<button class="infoBtn" id="exportAllBtn">Export Images</button>
		<button class="infoBtn" id="clearAllBtn">Clear Images</button>
		<button class="infoBtn" id="logout">Log Out</button>
	</div>

	<div class="myGallery hide" id="myGallery">
		<!-- Saved work goes here -->
	</div>

	</div>
	<?php include 'signup.php'; ?>
</section>