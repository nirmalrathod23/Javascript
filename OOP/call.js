function setUsername(username){
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

let nirmal = new createUser("nirmal", "nirmal@google.com", "123")

console.log(nirmal)