import mongoose from 'mongoose';
 const Greetings = mongoose.model("greetings",
     mongoose.Schema(
    {
        greetings : String
    },
    {
        versionKey: false
    }
 )
);
export default Greetings;
