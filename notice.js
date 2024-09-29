const array = [{
    mainDataInput:'Earn money',
    datePass: '12-05-2025'
}];

function mainFrame(comboList){
    let str = '';
    
    array.forEach(function(value,i){
        let strAdd = '';
         
        console.log(array[i].mainDataInput);
        strAdd= `
            <div class='sizeFont'>➤ ${array[i].mainDataInput}</div>
            <div class='sizeFont'>${array[i].datePass}</div>
            <button onclick='
                array.splice(${i}, 1);
                mainFrame();' class='deleteStyle'>delete</button>
        `;
        
        str = str + strAdd;
        
        
        
    });
    document.querySelector('.display')
        .innerHTML = `${str}`;
        
        
}

function addData(){
    const dataInput= document.getElementById('areaValue')
    const mainDataInput = dataInput.value;
    let dat = document.getElementById('getDate');
    let datePass=dat.value;
    let comboList = {
        mainDataInput: mainDataInput,
        datePass: datePass
    }
    array.push(comboList);
    
    dataInput.value = '';
    
    console.log(array);
    mainFrame(comboList);    
}



