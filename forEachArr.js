
function Foo(){
    // console.log(this)
    this.arr = [1,2,3,4,5];
    this.sum = 0;

    this.arr.forEach((val) => {
    // console.log(this)
      this.sum += val;
    });
  };
  

console.log(new Foo().sum);
  
  