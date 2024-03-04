let arr=[1,2,3,4,5,3,7,8,0];
let n = 3;
let countNSum = 0;
function countSum(arr){
    for(i=0; i<arr.length; i++){
        if(n<=arr[i]){
            countNSum = countNSum ^i;
        }
    }
    return(countNSum);
}

countSum(arr.length);