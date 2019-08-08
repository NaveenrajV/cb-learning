
const allUsers = []

const user = {
    name : "naveenraj",
    mail : "naveen@cb",
    password : "123",
    reset : function(newPassword){ this.password = newPassword}
}

allUsers.push(user)



const register = (userName,password) => {
    const newUser = Object.create(user)
    newUser.name = userName
    newUser.password = password
    allUsers.push(newUser)
    console.log("Registered successfully!")
}

export {user,register,allUsers}