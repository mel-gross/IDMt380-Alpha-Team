
<section class="userModal modal" id="userModal">
	<h1>User Info</h1>
	<div id="login-signup" class="default">
    <div id="sign-up-form-container" class="reveal-form">
        <h1 id="heading-one" class="display"> Sign-up for an Account and Color!</h1>
        <h1 id="heading-four" class="no-display"> Choose an Avatar for Your Account</h1>
       <form id="sign-up" method="POST" action="index.php">
        <input type="text" id="new-username" name="new-username" class="no-display" placeholder="Username" required>
        <input type="password" id="new-password" name="password" class="no-display" placeholder="password" required>
        <input type="password" id="re-type-password" name="confirm" class="no-display" placeholder="re-type password" required>
        <div id="avatar-cont" class="no-display">
        <label>
        <input type="radio" name="avatar" value="bull">
        <img src="img/avatars/bull.svg">
        </label>
        <label>
        <input type="radio" name="avatar" value="chick" >
        <img src="img/avatars/chick.svg">
        </label>
        <label>
        <input type="radio" name="avatar" value="crab" >
        <img src="img/avatars/crab.svg">
        </label>
        <label>
        <input type="radio" name="avatar" value="fox" >
        <img src="img/avatars/fox.svg">
        </label>
        <label>
        <input type="radio" name="avatar" value="hedgehog" >
        <img src="img/avatars/hedgehog.svg">
        </label>
        <label>
        <input type="radio" name="avatar" value="koala" >
        <img src="img/avatars/koala.svg">
        </label>
        <label>
        <input type="radio" name="avatar" value="lemur" >
        <img src="img/avatars/lemur.svg">
        </label>
        <label>
        <input type="radio" name="avatar" value="pig">
        <img src="img/avatars/pig.svg">
        </label>
        <label>
        <input type="radio" name="avatar" value="tiger" >
        <img src="img/avatars/tiger.svg">
        </label>
        <label>
        <input type="radio" name="avatar" value="whale" >
        <img src="img/avatars/whale.svg">
        </label>
        <label>
        <input type="radio" name="avatar" value="zebra" >
        <img src="img/avatars/zebra.svg">
        </label>
        </div>
        <input type="submit" id="sign-up-btn" name="sign-up" value="SIGN-UP" class = "no-display"> 
	   </form>
	   
	   <div id="login-form-container" class="no-reveal-form">
    <h1 class="reveal">Sign in to Your Account!</h1>
    <form id="login" method="POST" action="index.php">
        <input type="text" name="username" id="username" class="reveal" placeholder="username" required>
        <input type="text" name="password" id="password" class="reveal" placeholder="password" required>
        <input type="submit" name="login" id="login-btn" class="reveal" value="LOGIN">
    </form>
</div> 
	</div>
	<?php include 'signup.php';?>
</section>

