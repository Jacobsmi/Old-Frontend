module.exports = (username, password) => {
    let usernameRegex = /^([a-zA-Z0-9_]){3,15}$/
	let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    if(!username.match(usernameRegex) && !password.match(passwordRegex)){
        return 'username_password_error'
    }else if(!username.match(usernameRegex)){
        return 'username_error'
    }else if(!password.match(passwordRegex)){
        return 'password_error'
    }else if(username === 'Username'){
        return 'username_error'
    }
    // Make a call to the API to search for the login password
    fetch('http://localhost:3000/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(resp => resp.json())
    .then(respJSON => {
        if (respJSON['status'] === 'success'){
            console.log("Logged in successfully")
            return true
        }else if (respJSON['status'] === 'no_body_error'){
            console.log("Error sending the body of the request")
            return false
        }
    })
}