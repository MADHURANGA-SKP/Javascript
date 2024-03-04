let i=0;

function brp(n){
    for(i=1 << 30; i>0 ; i= Math.floor(i/2)){
        if((n & i) != 0){
            console.log('1');
        }else{
            console.log('0');
        }
    }
}

brp(3);
console.log('\n');
brp(2);
