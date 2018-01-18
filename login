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
	<link rel="icon" href="icon/favicon.ico">
	<title>login</title>
</head> 

<body background="img/1.jpg" onload="pageloadsignin()">
	<script src="js/bootstrapValidator.min.js"></script>
	<script type="text/javascript" src="js/login.js"></script>
	<script src="js/register.js"></script>
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
				<input type="checkbox" value="remember-me" name="remember" id="check">Remember me
			</label>
			<div class="button-submit">
				<button class="btn btn-primary" onclick="login()" id="btnLogin" >Sign in</button>
				<button class="btn btn-primary" onclick="signup()" id="btnSignup">Sign up</button>
			</div>
		</form>
	</div>

<!--
	<div  class="add1">
    <address>
      <strong>	Address .</strong><br>
      795 Folsom Ave, Suite 600<br>
      San Francisco, CA 94107<br>
      <abbr title="Phone">P:</abbr> 18810683629
    </address>
     
    <address>
      <strong>Peng Xue</strong><br>
      <a href="mailto:#">pengxue@sensetime.com</a>
    </address>
	</div>
	<-->
</body>
</html>