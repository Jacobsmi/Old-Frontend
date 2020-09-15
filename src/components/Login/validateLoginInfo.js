module.exports =  async (username, password) => {
    
    let usernameRegex = /^([a-zA-Z0-9_]){3,15}$/
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    if (username == null || password == null){
        return 'null_error'
    }else if(!username.match(usernameRegex) && !password.match(passwordRegex)){
        return 'username_password_error'
    }else if(!username.match(usernameRegex)){
        return 'username_error'
    }else if(!password.match(passwordRegex)){
        return 'password_error'
    }else if(username === 'Username'){
        return 'username_error'
    }
    // Make a call to the API to search for the login password
    const resp = await fetch('http://localhost:3000/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    const respJSON = await resp.json()

    if (respJSON['status'] === 'success'){
        console.log("Logged in successfully")
        return 'logged_in'
    }else if(respJSON['status'] === 'user_not_exists'){
        console.log("ERROR: USER DOES NOT EXIST")
        return 'user_not_exists'
    }else if (respJSON['status'] === 'no_body_error'){
        console.log("Error sending the body of the request")
        return 'no_body_error'
    }

}