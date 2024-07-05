import mongoose from 'mongoose'; const Visitor = mongoose.model("visitors",
     mongoose.Schema(
    {
        name : String,
        visitorcount : Number
    },
    {
        versionKey: false
    }
 )
);
export default Visitor;
