const dataset = [
    {name: "Aryamitra", roll: 1},
    {name: "Anamitra", roll: 2}
    ];
    
    //this function will run after 2 sec
    function getData(){
        setTimeout(() => {
            dataset.forEach((data)=> {
                console.log(data.name, data.roll);
            })
        }, 2000);
    }
    
    //this function will push a new data after 3 sec
    function pushData(data){
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                dataset.push(data)
                let err = false;
                if(!err){
                    resolve();
                }
                else{
                    reject('Something went wrong...')
                }
            }, 3000);
        })
    }

    const data = {name: "Ayan", roll: 3}
    pushData(data).then(getData);