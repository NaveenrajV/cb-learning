const reverse = (string) => {
    string  = Array.from(string)
    for(let start = 0, end = string.length-1; start <= end; start++, end--)
        [string[start],string[end]] = [string[end], string[start]]
    return string.join('')
}

// console.log(reverse("hi"))


const drop = (arr, elements = 1) => {
    while(elements){
        arr.shift()
        elements--
    }
   return arr
//    arr.length -=elements
//    return arr
}
console.log(drop([1,2,3]))


const dropRight = (arr,elements =1) => {
    while(elements){
        arr.pop()
        elements--
    }
   return arr
}
console.log(dropRight([1,2,3],1))