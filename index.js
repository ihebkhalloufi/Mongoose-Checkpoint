const express = require("express");
const mongoose = require("mongoose");
const { find } = require("./Models/Contact");
require("dotenv").config()
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, 
	{
	 useNewUrlParser: true,
	 useUnifiedTopology: true,

	})
.then(()=>{
	console.log('Data Base Connected');
	})
.catch((e)=>{
	console.log("Error", e);
	})
// import Contact 
    const Contact = require("./Models/Contact")
// Add new Contact
    const addContact = async (Name, Age, FavoriteFoods) => {
        const contact = await Contact.create({ Name, Age, FavoriteFoods });
        console.log(contact);
      };
// Add Contact
   //addContact("iheb",20,"pizza")
   //addContact("Bilel",26,"couscous")
   //addContact("Ahmed",10,"hot dog")
   //addContact("Mari",30,"hamburger")
   //addContact("Kamel",16,"sushi")
//Find Contact
const FindContact=async () =>{
    const contact = await Contact.find({})
console.log(contact)
}
//FindContact()
//show me All contact 

//Find Persone

const FindPersone = async (fav) => {
	const contact = await Contact.find({FavoriteFoods : fav})
	console.log(contact)
}
//FindPersone("pizza")
//FindPr("couscous")


//Find contact By ID
const FindID = async (id) => {
	const contact = await Contact.findById(id).exec();
	console.log(contact)
}
//FindID("62000fde48aa76acfe3dd21b")

// Filter And Update Data
const query = {Name:"iheb",Age:20} 
const update = {Name:"Adem",Age:23} 
const option = {new: true} 
const Update = async () => {
const contact = await Contact.findOneAndUpdate(query , update, option,)

console.log(contact)
}
//Update();
  // Delete One Persone By ID From Data And DELETE them

  const Delete = async (id) => {
	const contact = await Contact.findByIdAndDelete(id);
	console.log(contact);
  };
  //Delete("61feda9e97eb44f2daebe753")

  //Delete Many Contact Name Mari

  const DeletePersone = async () => {
	const contacts = await Contact.deleteMany({ Name:"Mari" }).then(function(){
    console.log(" Persone DELETED"); 
}).catch(function(error){
    console.log(error); 
})};
//DeletePersone("Mari")

//Search with FavoriteFood


const FindFood = async (food) => {
	const contact = await Contact.find({FavoriteFoods : food})
	.limit(2)
	.sort({Name:1})
	.select({Age:false})
	.exec((err, Data) => {
		console.log("CONTACT FOOD")
        if (err) {
            console.log(err);
        } else console.log(Data);
    });
	console.log(contact,)
}
FindFood("burritos")

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));