let data={};

const createTD = (id,TD) => {
    data[id] = TD;
    console.log('TD created: ', TD);
}

const readTD = () =>{
    console.log('TD: ');
    Object.keys(data).forEach((id,index)=>{
        console.log(index+1+': '+data[id]);
    })
}

const updateTD = (id,newTD) => {
    if(data.hasOwnProperty(id)){
        data[id] = newTD;
        console.log('TD updated: ',newTD);
    }else{
        console.log('TD not found',id);
    }
}

const  deleteTD = (id) => {
    if(data.hasOwnProperty(id)){
        const deletedTD = data[id];
        delete data[id];
        console.log('TD deleted: ',deletedTD);
    }else{
        console.log('TD not found', id);
    }
}

createTD('1','java');
createTD('2','js');
createTD('3','golang');

readTD();
updateTD('2','solodity');
deleteTD('3');
readTD();