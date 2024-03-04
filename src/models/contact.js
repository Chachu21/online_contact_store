import { Schema, model, models } from "mongoose";

const contactSchema = new Schema({
    name: String,
    phone_number: {
        type: String,
        required: [true, "phone number is required"],
        unique:true
    },
    description:String,
}, {
    timestamps: new Date().toLocaleDateString()
})

const Contact =models.Contact||model("Contact", contactSchema);
export default Contact