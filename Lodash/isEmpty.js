const isEmpty = (object) =>{

    const type = typeof object
  
    if(object === null || type === 'number'  || type === undefined || type === 'boolean')
      return false

    else if (type === 'string' && object.length == 0)
      return  true

    else if (Array.isArray(object) && object.length == 0) 
      return  true

    else
      return false
    
}
console.log(isEmpty(null))
console.log(isEmpty(true))
console.log(isEmpty([1, 2, 3]))
console.log(isEmpty(""))
console.log(isEmpty(''))
console.log(isEmpty({ 'a': 1 }))
console.log(isEmpty([1,2]))