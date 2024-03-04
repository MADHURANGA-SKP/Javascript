
for(let j = 0; j<6 ; j ++){
 console.log('*'.repeat(j))
}
    



let y = 20
let x =10

let str = ''
for(let i=0; i< y; i++){
    for(let j=1; j<x ; j++)
    if(i+ j >=y){
        str = str.concat('*')
    }else{
        str = str.concat(' ')
    }
    str = str.concat('\n')
}

console.log(str)


