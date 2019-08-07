// Question : 4


// function Car({color,name,id}){
//     this.color = color;
//     this.name = name;
//     this.id = id;
// }

let Car = function({color='red',name='abc',id='0'}){
    this.color = color;
    this.name = name;
    this.id = id;
};

Car.prototype.start =()=> {
    function stHelper(){
        console.log("Car started");
    } 
    return stHelper();
}
Car.prototype.accelerate = () =>{
    function accHelper(){
        console.log("Car Accelerates");
    } 
    return accHelper();
}
Car.prototype.stop = () =>{
    function stpHelper(){
        console.log("Car Stops");
    } 
    return stpHelper();
}
const c = new Car({color:"red",name:"jaguar",id:1})
c.start();
c.accelerate();
c.stop();