module.exports = (response) => {
    let loginError = document.getElementById("loginError")
    if(response === 'username_password_error'){
        loginError.innerHTML = 'Error: Username and Password are not valid'
        return false
    }else if(response === 'username_error'){
        loginError.innerHTML = 'Error: Username is not valid'
        return false
    }else if(response === 'password_error'){
        loginError.innerHTML = 'Error: Password is not valid'
        return false
    }else if(response === 'user_not_exists'){
        loginError.innerHTML = 'Error: Username does not exist'
        return false
    }else if(response === 'no_body_error'){
        loginError.innerHTML = 'There was an error sending your information to the server\nPlease try again!'
        return false
    }else if(response === 'logged_in'){
        loginError.innerHTML = 'Logged in successfully'
        return true
    }
}