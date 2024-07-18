import mongoose from "mongoose";
 
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://HAV_2902:Dynamicdatabase99@cluster0.2k9rtkg.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}