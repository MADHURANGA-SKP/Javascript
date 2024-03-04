let y = 10
let x = 10
let str2 = ''
for(let i=1; i< y; i++){
    for(let j=1; j<x ; j++)
    if(i <= j){
        str2 = str2.concat('*')
    }else{
        str2 = str2.concat(' ')
    }
    str2 = str2.concat('\n')
}

console.log(str2)