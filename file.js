function toCompare (element) {
    if((element !== "+")&(element !== "-")&(element !== "*")&(element !== "/")) 
        return true; 
    else 
        return false;
}
function structureString(string) { 
    let arr = string.split('');
    for (let index = 0; index < arr.length-1; index++) {
        if(toCompare(arr[index])&toCompare(arr[index+1])){
            arr[index] = [arr[index]+arr[index+1]].toString();
            arr.splice(index+1,1)
            index--;
        }
    }
    for (let index = 0; index < arr.length; index++) {
        if(toCompare(arr[index])){
            arr[index] = Number(arr[index])
        }
    }
    return arr;
}
function solveEquation(string){
    arr = structureString(string);
    let result = 0; 
    for (let index = 0; index < arr.length-1; index++){
        if(arr[index+1]==='+'){
            result = arr[index] + arr[index+2]
            arr[index] = result;
            arr.splice(index+1,2)
            index--;
        }
        if(arr[index+1]==='-'){
            result = arr[index] - arr[index+2]
            arr[index] = result;
            arr.splice(index+1,2)
            index--;
        }
        if(arr[index+1]==='*'){
            result = arr[index] * arr[index+2]
            arr[index] = result;
            arr.splice(index+1,2)
            index--;
        }
        if(arr[index+1]==='/'){
            if(arr[index+2]!==0){
                result = arr[index] / arr[index+2]
                arr[index] = result;
                arr.splice(index+1,2)
                index--;
            }
            else 
                return 'ERROR';
        }
    }
    return arr[0];
}
const screen = document.querySelector('#screenInOut');
const screenResult = document.querySelector('#screenResult');
function addInput(){
    if ((screen.textContent != 0)&(screen.textContent != 'NaN')&(screen.textContent != 'ERROR'))
        screen.textContent = screen.textContent + this.textContent;
    else
        screen.textContent = this.textContent;  
}
function showOnlyTwoNumbersAtTheSameTime(){
    let equation = screen.textContent;
    let arrEquation = structureString(equation);
    if (arrEquation.length>3){
        let symbol = arrEquation.pop();
        console.log(arrEquation);
        let result=solveEquation(arrEquation.join(''));
        console.log(result);
        screenResult.textContent = result; 
        screen.textContent = result+symbol; 
    }
}
function showResult(){
    let equation = screen.textContent;
    let result = solveEquation(equation);
    //screen.textContent = result; 
    screenResult.textContent = result; 
}

let btn = document.querySelectorAll('.press');
for (const b of btn) {
    b.addEventListener('click',addInput);
}

let symbols= document.querySelectorAll('.symbol');
for (const b of btn) {
    b.addEventListener('click',addInput);
    b.addEventListener('click',showOnlyTwoNumbersAtTheSameTime);
}

let equal = document.querySelector('#equal');
equal.addEventListener('click',showResult);
