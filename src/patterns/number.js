// 4 3 2 1
//  3 2 1
//   2 1
//    1

function stars(n){
    var str = '';
    for(var i=n; i>=1; i--){
        for(var k=n; k>=i; k--){
            str += "\t";
        }
        for(var j=i; j>=1; j--){
            str += j+"\t\t";
        }
        console.log(str);
        str = "";
    }
}stars(3);
