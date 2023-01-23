
function add(a, b) {
    debugger
    const result = a + b
    addToHistory("+", a, b, result)
    return result;
}

function divide(a, b){
    const result = a / b
    addToHistory("/", a, b, result)
    return result;
}
function subtract(a, b) {
    const result = a - b
    addToHistory("-", a, b, result)
    return result;
}

function multiply(a, b) {
    const result = a * b
    addToHistory("*", a, b, result)
    return result;
}

function selectFirstNumber(){
    let input=+prompt("Please Enter first number:")

    while(Number.isNaN(input)){
        alert("You Entered Invalid Number")
        input=+prompt("Please Enter first number:") 
    }

    return input
}

function selectSecondNumber(){
    let input=+prompt("Please Enter Second number:")
    while(Number.isNaN(input)){
        alert("You Entered Invalid Number")
        input=+prompt("Please Enter Second number:") 
    }
    return input
}

function selectOperation(input){
    switch (input) {
        case 'add':
            alert("the result:"+add(selectFirstNumber(),selectSecondNumber()))
            break;
        case 'divide':
                alert("the result:"+divide(selectFirstNumber(),selectSecondNumber()))
                break;
        case 'substract':
                alert("the result:"+subtract(selectFirstNumber(),selectSecondNumber()))
                break;
        case 'mutliply':
                alert("the result:"+multiply(selectFirstNumber(),selectSecondNumber()))
                break;
        case 'history':
                alert(getHistory())
                break;
        default:
           alert("Entered Invalid option , Please Try Again!!")
            break;
    }
}

let history=[
]

function addToHistory(o,n1,n2,r){
    history.push(
        {
            operator:o,
            num1:n1,
            num2:n2,
            result:r
        }
    )
}

function getHistory(){
let result = ""
history.forEach((o, i) => {
    /*
    1- 2+3=5
    2- 5*6=30
    */
    result += `${i+1}- ${o.num1}${o.operator}${o.num2}=${o.result} \n`
})
return result
}

while(true){
    const result=prompt("choose your operation : add , divide ,  substract ,mutliply , history")
    selectOperation(result)
}



