// Question 3: Arguments checker

let sum = (num1,num2,num3) => num1+num2+num3

let diff = (num1,num2,num3) => num1-num2-num3

function argumentChecker(func, ...args)
{
	const receivedLength = args.length  
	const actualLength = func.length 

	if(actualLength === receivedLength)
		return func(...args)

	else if(receivedLength < actualLength)
		console.error(`Few arguments , Expected : ${actualLength} Received : ${receivedLength}` )

	else if(argsLength > actualLength)
		console.error(`Many arguments , Expected : ${actualLength} Received : ${receivedLength}` )
}

// argumentChecker(sum,1,2)