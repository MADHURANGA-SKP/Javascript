// let n = 5
// let str= ''
// for(let i=1;i<=n;i++){
//     for(let j =1;j<=i;j++){
//         str+='* '
        
//     }
//     str+=('\n')
// }
// console.log(str)//increese
// //----------------------------------------------------

// let str2= ''
// for(let i=1;i<=n;i++){
//     for(let j =i;j<=n;j++){
//         str2+='* '
//     }
//     str2+=('\n')
// }
// console.log(str2)//decreese
// //----------------------------------------------------

// //rightside triangle
// let str4= ''
// for(let i=1;i<=n;i++){
//     for(let j =i; j<=n; j++){
//         str4+='  ' 
//     }
//     for(let j =1; j<=i; j++){
//         str4+='* ' 
//     }
//     str4+=('\n')
// }
// console.log(str4)
// //----------------------------------------------------

// let str6= ''
// for(let i=1;i<=n;i++){
//     for(let j =1;j<=i;j++){
//         str6+='  '  
//     }
//     for(let j =i; j<=n; j++){
//         str6+='* ' 
//     }
//     str6+=('\n')
// }
// console.log(str6)

// //----------------------------------------------------

// let str7= ''//mountian
// for(let i=1;i<=n;i++){
//     for(let j =i;j<=n;j++){
//         str7+='  '  
//     }
//     for(let j =1; j<i; j++){
//         str7+='* ' 
//     }
//     for(let j =1; j<=i; j++){
//         str7+='* ' 
//     }
//     str7+=('\n')
// }
// console.log(str7)

// //----------------------------------------------------
// let str8= ''//reverse mountian
// for(let i=1;i<=n;i++){
//     for(let j =1;j<=i;j++){
//         str8+='  '  
//     }
//     for(let j =i; j<n; j++){
//         str8+='* ' 
//     }
//     for(let j =i; j<=n; j++){
//         str8+='* ' 
//     }
//     str8+=('\n')
// }
// console.log(str8)


// //-----------------------------------
// //diamond
// let str9= ''//mountian
// for(let i=1;i<n;i++){
//     for(let j =i;j<=n;j++){
//         str9+='  '  
//     }
//     for(let j =1; j<i; j++){
//         str9+='* ' 
//     }
//     for(let j =1; j<=i; j++){
//         str9+='* ' 
//     }
//     str9+=('\n')
// }
// console.log(str9)
// for(let i=1;i<=n;i++){
//     for(let j =1;j<=i;j++){
//         str9+='  '  
//     }
//     for(let j =i; j<n; j++){
//         str9+='* ' 
//     }
//     for(let j =i; j<=n; j++){
//         str9+='* ' 
//     }
//     str9+=('\n')
// }
// console.log(str9)

// let str10= ''
// for(let i=1;i<=n;i++){
//     let row ='';
//     for(let j =1;j<=i;j++){
//         row+='* '   
//     }
//     str10+= row + '\n'
// }
// for(let i=n-1;i>=1;i--){
//     let row ='';
//     for(let j =1;j<=i; j++){
//         row+='* '   
//     }
//     str10+= row + '\n'
// }
// console.log(str10)

let n =5 
let str = ''
for(let i=1; i<=n ; i++){
    for(let j=1; j<=i; j ++){
        str+= '* '
    }
    str+='\n'
}
console.log(str)


let str1 = ''
for(let i=1; i<=n ; i++){
    for(let j=i; j<=n; j ++){
        str1+= '* '
    }
    str1+='\n'
}
console.log(str1)


let str3 = ''
for(let i=1; i<=n ; i++){
    for(let j=i; j<=n; j ++){
        str3+= '  '
    }
    for(let j=1; j<=i; j ++){
        str3+= '* '
    }
    str3+='\n'
}
console.log(str3)

let str4 = ''
for(let i=1; i<=n ; i++){
    for(let j=1; j<=i; j ++){
        str4+= '  '
    }
    for(let j=i; j<=n; j ++){
        str4+= '* '
    }
    str4+='\n'
}
console.log(str4)


let str5 = ''
for(let i=1; i<=n ; i++){
    for(let j=i; j<=n; j ++){
        str5+= '  '
    }
    for(let j=1; j<i; j ++){
        str5+= '* '
    }
    for(let j=1; j<=i; j ++){
        str5+= '* '
    }
    str5+='\n'
}
console.log(str5)

let str6 = ''
for(let i=1; i<=n ; i++){
    for(let j=1; j<=i; j ++){
        str6+= '  '
    }
    for(let j=i; j<n; j ++){
        str6+= '* '
    }
    for(let j=i; j<=n; j ++){
        str6+= '* '
    }
    str6+='\n'
}
console.log(str6)

let str7 = ''
for(let i=1; i<n ; i++){
    for(let j=i; j<=n; j ++){
        str7+= '  '
    }
    for(let j=1; j<i; j ++){
        str7+= '* '
    }
    for(let j=1; j<=i; j ++){
        str7+= '* '
    }
    str7+='\n'
}
for(let i=1; i<=n ; i++){
    for(let j=1; j<=i; j ++){
        str7+= '  '
    }
    for(let j=i; j<n; j ++){
        str7+= '* '
    }
    for(let j=i; j<=n; j ++){
        str7+= '* '
    }
    str7+='\n'
}
console.log(str7)



let str10 = ''
for(let i=1; i<=n ; i++){
    for(let j=1; j<=i; j ++){
        str10+= '* '
    }
    str10+='\n'
}
for(let i=1; i<=n ; i++){
    for(let j=i; j<n; j ++){
        str10+= '* '
    }
    str10+='\n'
}
console.log(str10)


let str11 = ''
for(let i=1; i<n ; i++){
    for(let j=i; j<=n; j ++){
        str11+= '  '
    }
    for(let j=1; j<=i; j ++){
        str11+= '* '
    }
    str11+='\n'
}
for(let i=1; i<=n ; i++){
    for(let j=1; j<=i; j ++){
        str11+= '  '
    }
    for(let j=i; j<=n; j ++){
        str11+= '* '
    }
    str11+='\n'
}
console.log(str11)
//----------------------------------------------------------------------

let str12 = ''
for(let i=1; i<=n ; i++){
    for(let j=1; j<=i; j ++){
        str12+= '* '
    }
    str12+='\n'
}
console.log(str12)
//---------------------------------------------------------------------
let str13 = ''
for(let i=1; i<=n ; i++){
    for(let j=i; j<=n; j ++){
        str13+= '* '
    }
    str13+='\n'
}
console.log(str13)

//=--------------------------------------------------------------------
let str14 = ''
for(let i=1; i<n ; i++){
    for(let j=1; j<=i; j ++){
        str14+= '* '
    }
    str14+='\n'
}
for(let i=1; i<=n ; i++){
    for(let j=i; j<=n; j ++){
        str14+= '* '
    }
    str14+='\n'
}
console.log(str14)

//---------------------------------------------------------------------
let str15 = ''
for(let i=1; i<n ; i++){
    for(let j=i; j<=n; j ++){
        str15+= '  '
    }
    for(let j=1; j<=i; j ++){
        str15+= '* '
    }
    str15+='\n'
}
for(let i=1; i<=n ; i++){
    for(let j=1; j<=i; j ++){
        str15+= '  '
    }
    for(let j=i; j<=n; j ++){
        str15+= '* '
    }
    str15+='\n'
}
console.log(str15)

//---------------------------------------------------------------------

let str17 = ''
for(let i=1; i<=n ; i++){
    for(let j=i; j<=n; j++){
        str17+='  '
    }
    for(let j=1; j<i; j++){
        str17+='* '
    }
    for(let j=1; j<=i; j++){
        str17+='* '
    }
    str17+='\n'
}
console.log(str17)
//-----------------------------------------------------------------------
let str18= ''
for(let i=1; i<=n ; i++){
    for(let j=1; j<=i; j++){
        str18+='  '
    }
    for(let j=i; j<n; j++){
        str18+='* '
    }
    for(let j=i; j<=n; j++){
        str18+='* '
    }
    str18+='\n'
}
console.log(str18)
//------------------------------------------------------------------------
let str19=''
for(let i=1; i<n; i++){
    for(let j=i; j<=n; j++){
        str19+='  '
    }
    for(let j=1; j<i; j++){
        str19+='* '
    }
    for(let j=1; j<=i; j++){
        str19+='* '
    }
    str19+='\n'
}
for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){
        str19+='  '
    }
    for(let j=i ; j<n; j++){
        str19+='* '
    }
    for(let j=i; j<=n; j++){
        str19+='* '
    }
    str19+='\n'
}
console.log(str19)


