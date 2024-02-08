const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const tutorrouter=require("./controller/tutorrouter")

const app=express()


app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://annvinc:annvinc@cluster0.ovg3s8x.mongodb.net/tutorDb?retryWrites=true&w=majority");
app.use("/api/tutors",tutorrouter)

app.listen(3001,()=>{
    console.log("server running")
})