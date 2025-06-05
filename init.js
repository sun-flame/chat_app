const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() => {
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "rashmi",
        to: "shivnaya",
        msg: "Lets go shopping",
        created_at: new Date(),
    },
    {
        from: "rakesh",
        to: "raghav",
        msg: "Finally RCB won!!",
        created_at: new Date(),
    },{
        from: "sarang",
        to: "Aboli",
        msg: "I am in love with you",
        created_at: new Date(),
    },{
        from: "paras",
        to: "mummy",
        msg: "i am going to college. Bye mum!!",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);

