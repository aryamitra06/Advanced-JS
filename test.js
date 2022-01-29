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

const data = {name: "Ayan", roll: 3}

function pushData(data){
    setTimeout(() => {
        dataset.push(data)
    }, 3000);
}
pushData(data);
getData();