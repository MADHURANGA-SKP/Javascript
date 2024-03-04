let y = 6
let x = 6

let str5 = "";

for(let i = 1; i < y; i++ ){
    for(let j = 1; j < x; j++){
        if(i <= y / 2 && j >= (y / 2) - (i - 1) && j <= (y / 2) + (i - 1) ){
                        str5 = str5.concat("*");
         }else if(i >= y / 2
            && j > ((y / 2) -  i) * (-1)
             && j < (y - ((y / 2) -  i) * (-1))){
             str5 = str5.concat("*");
         }
        else {
        str5 = str5.concat(" ");
         }
        }
         str5 = str5.concat("\n");
     }

            console.log(str5)
            console.log(3<3)