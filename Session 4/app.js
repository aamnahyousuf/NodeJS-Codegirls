let car1 = {
    name: "Ferrrari",
    engine: "tractor"
};
let owner1 = {
    name:  "Leclerc",
    business: "f1"
};

export function getResult(car, owner){
     if((!car || !owner)){
           
            return{
            car: {},
            owner: {},
            error: "you have no data in object"
        }
        return {
            car,
            owner
        };
       
    }
}

const {car, owner, error} = getResult();
if(error){
    console.log(error)
}else{
    console.log(car,owner)
}
