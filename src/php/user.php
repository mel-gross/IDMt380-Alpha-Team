

<section class="userModal modal" id="userModal">
	<h1 class="modalTitle" id="userTitle">Account</h1>

	<div class="innerUserModal">
	<button class="infoBtn hide" id="logout">Log Out</button>
		<div class="show" id="form-cont">

	<form id="signIn" class="signIn hide" action="" method="post">
	<h2 class="login_header" id="login_header">Log In</h2>
		<input name="username" class="input_box" type="email" id="username" maxlength="30" placeholder="Email">
		<input name="password"class="input_box" type="password"  id="password" minlength="8" maxlength="15" placeholder="Password (at least 8 characters)">
		<input type="submit" class="infoBtn" id="oldSubmit" value="Sign In">
</form>
<button class="infoBtn hide" id="signUpBtn">Not a user yet? Sign Up!</button>


<form id="signUp" class="signIn" action="" method="POST">
<h2 class="login_header" id="login_header">Sign Up</h2>
		<input class="input_box" type="email" name="new-username" id="new-username" minlength="8" maxlength="" placeholder="Email">	
		<input class="input_box" type="password" name="new-password" id="new-password" minlength="8" maxlength="15" placeholder="Password" onclick="matchPW()">	
		<input class="input_box" type="password" id="passwordConfirm" minlength="8" maxlength="15" placeholder="Confirm Password" onclick="matchPW()">
		<input type="submit" class="infoBtn" id="newSubmit" value="Sign Up">
	</form>
	<button class="infoBtn" id="signInBtn">Already a User? Sign In!</button>


</div>

</div>
	

	<div class="myGallery hide" id="myGallery">
		
		<?php

		$userFile = file_get_contents('../src/php/json/user.json');
		$userData = json_decode($userFile, true);
		$thisUser = $_GET['username'];
		

		foreach($userData as $user) {

			if($user['username']== $thisUser) {

					foreach ($user['saved_work'] as $work) {

						echo 
						'<div class="SVGbox user">
						<div class="innerBox" id="' . $work['saved_id'] . '">';
						
						include $work["saved_source"];	

					echo'</div>
						</div>';
						
						
					};

			};

		};
?>
	</div>

	</div>
	
	<?php include 'signup.php'; ?>
</section>