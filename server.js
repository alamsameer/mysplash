import 'dotenv/config';
import cors from 'cors';
import express from "express"
import mongoose from "mongoose"
import {getImg,postImg,deleteImg} from "./controller/controllers.js"
import bp from "body-parser"

const app =express()
// connect to database 
const connect = (url)=>{
return  mongoose.connect(url,{ useUnifiedTopology: true,useNewUrlParser:true})
}

// middleware setup
app.use(bp.urlencoded({extended:true}))
app.use(bp.json())
app.use(cors())
// middleware setup end


//  routin setup
app.get('/',getImg)
app.post("/upload",postImg)
app.delete("/delete",deleteImg)
//  routing end 


const port = process.env.PORT|| 3000
connect(process.env.mongo).then(()=>{
    app.listen(port,()=>{
        console.log("listening at "+ port);
    })
}).catch(e =>{ 
    console.log(e)}
)