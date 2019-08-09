const isArray = object => object instanceof Array

console.log(isArray([]))
console.log(isArray([]));
console.log(isArray([1]));
console.log(isArray(new Array()));
console.log(isArray(new Array('a', 'b', 'c', 'd')));
console.log(isArray(new Array(3)));
console.log("***********")
console.log(isArray());
console.log(isArray({}));
console.log(isArray(null));
console.log(isArray(undefined));
console.log(isArray(17));
console.log(isArray('Array'));
console.log(isArray(true));
console.log(isArray(false));

// console.log(isArray({ __proto__: Array.prototype }));