const recursivrBinarySearch = (arr,target) => {
    return search(arr, target, 0, arr.length-1)
}

const search = (arr, target, leftIndex, rightIndex) => {
    console.log('try')
    if(leftIndex > rightIndex){
        return -1
    }
    let middleIndex = Math.floor((leftIndex + rightIndex)/2)
    if(target === arr[middleIndex]){
        return middleIndex
    }
    if(target < arr[middleIndex]){
        return search(arr,target,leftIndex, middleIndex-1)
    }else{
        return search(arr,target,middleIndex+1,rightIndex)
    }
}

console.log(recursivrBinarySearch([-5,2,4,6,10],10))
console.log(recursivrBinarySearch([-5,2,4,6,10],6))
console.log(recursivrBinarySearch([-5,2,4,6,10],20))
