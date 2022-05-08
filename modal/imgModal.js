import mongoose from "mongoose"
// Schema 
const uploadImgSchema= new mongoose.Schema({
    label:String,
    url:String
})
//  schema End 

// Modal
const UploadImg=mongoose.model("spalshimg",uploadImgSchema)

export default UploadImg