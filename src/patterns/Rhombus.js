const n = 5
let str = ''
for (let i=1; i<=n; i++){
    let row = ''
    for(let j=1; j<=n-1; j++){
        row +=' '
    }
    for(let j =1; j<=n; j++){
        row +='*'
    }
    str+=row+'\n'
}
console.log(str)