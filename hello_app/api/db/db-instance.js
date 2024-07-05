import mongoose from "mongoose";

const db = {};
db.mongoose = mongoose;
db.url = "mongodb://mongodb/deb";
db.mongoose.connect(db.url)
.then(() => {
    console.log("connected to database :) ");
})
.catch(err => {
    console.log("could't connect to database :( ");
    process.exit();
})
export default db;
