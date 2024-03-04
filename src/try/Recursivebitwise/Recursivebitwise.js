function bin(n){
    if(n>1){
        bin(n>>1);
    }
    console.log(n&1);
}

bin(131)


console.log('---------------------------')

let number = 0b111;
console.log(number);

console.log('---------------------------')

let a=5;
let b=7;
console.log('before swapping, a =',a, ' ', 'b = ', b);
a ^= b;
b ^= a;
a ^= b;
console.log('after swapping, a =',a, ' ', 'b = ', b);

console.log('---------------------------')


