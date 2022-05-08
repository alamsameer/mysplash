import UploadImg from "../modal/imgModal.js"

const getImg = async (req,res)=>{
    const getImgs=await UploadImg.find({})
   //   console.log(getImgs);
   res.send(getImgs)
}
const postImg = async(req,res)=>{
    const{url,label}=req.body
    const images=await UploadImg.create({label,url},(data,err)=>{
        console.log(data)
        console.log(err)
    })
    res.send("upoadinhj")
}
const deleteImg = async(req,res)=>{
    const label=req.query.label
    console.log("del"+label);
    try{
       await UploadImg.deleteOne({label});
       res.send("deleting")

    }
    catch{
        res.send('not deleted')
    }
   
}

export {getImg,postImg,deleteImg}