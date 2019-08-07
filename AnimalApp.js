// Question 4

class Animal{
    constructor(){
        this.legs = 4;
        this.eyes = 2;
        this.ears = 2;
        this.tail = 1;
    }

    move(){
        console.log("Animal Move !");
    }

    static inherit = (object) =>{
        const temp = new Animal()
        Object.assign(temp,object)
        console.log(temp)
        return temp
    } 
}

let Tiger = () => {
    Animal.inherit({
        roar: function(){
            console.log("Roaring");
          }  
    });
} 
// let Tiger = function(){ Animal.inherit({
//     roar: function(){
//         console.log("Roaring");
//       }  
// })};

let Elephant = function(){ Animal.inherit({
    trumpet: function(){
        console.log("Elephant trumpet")
    }
})};

let tiger = new Tiger()
let elephant = new Elephant()
console.log(tiger.roar())
console.log(elephant.trumpet())