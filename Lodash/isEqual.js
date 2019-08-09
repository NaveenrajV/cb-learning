let newArr = {}
const flattenObject = obj => {
    for(let key in obj){
      const type = typeof obj[key]
      if(type == 'object'){
        flattenObject(obj[key])
      }
      else{
        newArr[key] = obj[key]
      }   
    }  
    return newArr
}

const isEqual = (object1, object2) => {

    // return JSON.stringify(object1) === JSON.stringify(object2)
  
    if (typeof object1 != typeof object2) return false
  
    let type = typeof object1
  
     
    if ( object1 === null || ['string','number','boolean','undefined'].indexOf(type) > -1)
      return object1 === object2 
  
    if (Array.isArray(object1)){
      if(object1.length != object2.length) return false

      object1.forEach((value) =>{
        if(object2.indexOf(value)==-1)
         return false
      })
      return true
    }
    
  if(JSON.stringify(Object.keys(object1)) != JSON.stringify(Object.keys(object2))) return false;



  const flatObj1 = flattenObject(object1)
  newArr = {}
  const flatObj2 = flattenObject(object2)



    for(let value in flatObj1){
      if(flatObj2.hasOwnProperty(value)){
        if (typeof value === object )
          isEqual(value,flatObj2[value])

        if(!(flatObj2[value] === flatObj1[value]))
          return false
      }
    }
    return true
  }
  
  // let object = {'a': 1, 'b':2 };
  // let other = { 'b' : 2,'a': 1 };
  let object = [1,2]
  let other = [1,2]
  // console.log(isEqual({'a': 1, 'b':2 },{ 'b' : 2,'a': 1 }))
  console.log(isEqual({'a': 1, 'b':2 },{ 'a' : 1,'b': 2 }))
  
  console.log(isEqual([1,2],[1,2]))
  console.log(isEqual([1,2],[2,1]))
  console.log(isEqual(undefined,undefined))
  console.log(isEqual(null,null))


  console.log(isEqual({'a': 1, 'b':{'c':2} },{ 'a': 1, 'b' : {'c':2}}))