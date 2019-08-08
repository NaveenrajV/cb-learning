const chunk = (arr,size) =>{
    const newArr = []
    for(let i=0; arr.length!=0 && i < arr.length; i+=size){
         let temp = arr.slice(i,i+size)
         newArr.push(temp)
    }
    return newArr
}

const compact = (arr) => arr.filter(value => value)

const drop = (arr, elements = 1) => arr.slice(elements)

const dropRight = (arr,elements =1) => arr.slice(0,arr.length-elements)


// Flatten Deep
const newArr = []
const flattenDeep = (arr) => {
    arr.forEach((item)=> {
        // console.log("Item "+item)
        if(Array.isArray(item))
            flattenDeep(item)
        else
            newArr.push(item)
    })    
    return newArr
}


const flatten = (arr) => {
    const newArr1 = []
    arr.forEach((item)=> {
        if(Array.isArray(item)){
            item.forEach( element =>{
                newArr1.push(element)
            })
        }
        else
            newArr1.push(item)
    })    
    return newArr1
}


// Flatten for Depth
const flattenForDepth = (arr) => {
    const newArray = []
    arr.forEach((item)=> {
        if(Array.isArray(item)){
            item.forEach( element =>{
                newArray.push(element)
            })
        }
        else
        newArray.push(item)
    })    
    return newArray
}

const flattenDepth = (arr,depth = 1) => {
    while(depth){
        arr = flattenForDepth(arr)
        depth--
    }
    return arr
}


// Flatten With uniqueness

const uniquenessArray = []
function flattenWithUniquenes(arr){
    arr.forEach((item)=> {
        if(Array.isArray(item) ){
            flattenWithUniquenes(item)
        }
        else{
            if(uniquenessArray.indexOf(item) == -1)
                uniquenessArray.push(item)
        }
    })    

    return uniquenessArray
}

let arr  = [1,2,3,4,5,6]
let compactArr = [1,0,2,'',3,"",4,undefined,5,null]
let deepFlattenArr = [[1,2],3,[5,2],4,5,[2,3,[[4]]]]
let flattenArr = [1, [2, [3, [4]], 5]]

console.log(chunk(arr,3))
console.log(compact(compactArr))
console.log(drop(arr,2))
console.log(dropRight(arr,3))
console.log(flatten(flattenArr))
console.log(flattenDeep(deepFlattenArr))
console.log(flattenDepth(flattenArr))
console.log(flattenWithUniquenes(deepFlattenArr))
