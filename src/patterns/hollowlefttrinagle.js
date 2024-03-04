const n =5 ;
let str=''

for(let i=1; i<=n; i++){
    for(let j =1; j<=i; j++){
        if(j===1 || j ===i || i===n ){
            str +='* '
        }else{
            str+=' '
        }
    }
    str+='\n'
}
console.log(str)