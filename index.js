const mongoose = require('mongoose');
let owner = require("./schema");
let pet = require("./petSchema");

async function main(){
    try{
        await mongoose.connect('mongodb://localhost:27017/pets');
    
    
        console.log("connected");
    }
    catch(e){
        console.log(e.message)
    }
    

    
}

async function getList(person){
    let findOwner = await owner.where("firstName").equals(person);
    console.log(findOwner)

}

main();

getList("dani");
