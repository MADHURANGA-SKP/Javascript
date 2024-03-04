let data= [];

function createTD(TD){
    data.push(TD);
    console.log('TD created: ', TD);
}

function readTD(){
    console.log('TD :');
    data.forEach((TD,index)=>{
        console.log(index+1+'.'+TD);
    })
}

function updateTD(index,newTD){
    if(index>=0 && index<data.length){
        data[index] = newTD;
        console.log('TD Updated: ', newTD);
    }else{
        console.log('invalid index: ',index)
    }
}

function deleteTD(index){
    if(index>=0 && index<data.length){
        const deletedTD = data.splice(index);
        console.log('TD deleted: ',deleteTD);
    }else{
        console.log('invalid index: ',index)
    }
}

createTD('java');
createTD('js');
createTD('go lang');

readTD();
updateTD(1,'solidity');
deleteTD(2);

readTD();