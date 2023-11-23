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

console.log(solveEquation('5.5+3+15.3-2+10-5-10'))