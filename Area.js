// Question 2 : Object Orientated approach


function Circle(radius)
{
	this.radius = radius
	this.area = () => {
		return this.PI*(this.radius**2)
	}

}

Circle.prototype.PI = 3.14

const obj = new Circle(2)
console.log(obj.area())
