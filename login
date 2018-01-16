<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
	<script src="http://cdn.static.runoob.com/libs/jquery/2.1.1/jquery.min.js"></script>
  	<script src="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/bootstrap-responsive.min.css">
	<link rel="stylesheet" href="css/login.css">
	<title>login</title>
</head> 

<body>
	<script src="js/bootstrapValidator.min.js"></script>
	<script type="text/javascript" src="js/login.js"></script>
	<link rel="stylesheet" href="css/bootstrapValidator.min.css"/>
	<div id="login" class="login_container">
		<form class="form_horizontal " role="form">
			<div class="control-group">
				<label class="form-login-heading">Please sign in</label>
			</div>
			<input type="password" name="password1"  style="display:none"/> 
			<input type="text" class="form-control" id="uid" placeholder="LDAP ID" required>
			<input type="password" class="form-control" id="password" placeholder="password" required>
			<label class="checkbox">
				<input type="checkbox" value="remember-me" name="remember">Remember me
			</label>
			<div class="button-submit">
				<button class="btn btn-primary" onclick="login()" id="btnLogin" >Sign in</button>
				<button class="btn btn-primary" onclick="signup()" id="btnSignup">Sign up</button>
			</div>
		</form>
	</div>


	
</body>
</html>