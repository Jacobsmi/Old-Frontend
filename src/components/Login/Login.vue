<template>
  <div id="login">
    <h1>Login Page</h1>
    <input @click="usernameInputClick" type="text" id="usernameInput" value="Username" />
    <br />
    <input @click="passwordInputClick" type="text" id="passwordInput" value="Password" />
    <br />
    <button @click="loginClick" id="loginButton">Login</button>
    
    <div id='loginError'>

    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    usernameInputClick: function () {
      if (document.getElementById("usernameInput").value === "Username") {
        document.getElementById("usernameInput").value = "";
      }
    },
    passwordInputClick: function () {
      document.getElementById("passwordInput").type = "password";
      document.getElementById("passwordInput").value = "";
    },
    loginClick: async function () {
      let username = document.getElementById("usernameInput").value;
      let password = document.getElementById("passwordInput").value;

      // Import the file that has the validation function
      const validateLogin = require("./validateLoginInfo");
      const handleResponse = require("./handleResponse");
      const response = await validateLogin(username, password);
      const canLogin = handleResponse(response);
      if (canLogin){
        console.log("Can now actually attempt login with password")
      }
    },
  },
};
</script>

<style>
</style>