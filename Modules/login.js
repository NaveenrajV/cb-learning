import {register as rgs,user,allUsers as users} from './user.js'



const login = (username,passsword) => {

    const tempUser = users.filter(value => value.name == username && value.password == passsword)
    //console.log(tempUser.length)
    if(tempUser.length > 0)
        console.log("Logged in successfully ! ")
    else
        console.log("Invalid credentials")
}




export {login}
