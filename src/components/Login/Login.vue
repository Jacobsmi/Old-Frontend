<template>
  <div id='login'>
    <h1>Login Page</h1>
    <input @click='usernameInputClick' type='text' id='usernameInput' value='Username'><br>
    <input @click='passwordInputClick' type='text' id='passwordInput' value='Password'><br>
	<button @click='loginClick' id='loginButton'>Login</button>
  </div>
</template>

<script>
export default {
    name: 'Login',
    methods: {
        usernameInputClick: function () {
            if (document.getElementById("usernameInput").value === 'Username'){
                document.getElementById("usernameInput").value = ''
            }
        },
        passwordInputClick: function (){
            document.getElementById("passwordInput").type = 'password'
            document.getElementById("passwordInput").value = ''
		},
		loginClick: function (){
			let username = document.getElementById("usernameInput").value
			let password = document.getElementById("passwordInput").value
      
      // Import the file that has the validation function
      const validateLogin = require('./validateLoginInfo')
      console.log(validateLogin(username, password))
		}

    }
}
</script>

<style>

</style>