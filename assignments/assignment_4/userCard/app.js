const express=require ("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const override=require("method-override")


const appfields=require("./shcemaModule/schema.js")
async function main(){
await mongoose.connect("mongodb://localhost:27017/Todo")}main()
const app=express()
app.use(express.static('public'))
app.use(override("_method"))
app.use(bodyParser())
app.set("views","./views")
app.set("view engine","ejs")

app.get("/",async(req,res)=>{
   const users=await appfields.find()
    res.render("index.ejs",{users})
  

})
app.post("/data/collect",async (req,res)=>{
    console.log("hello")
    await appfields.create({name:req.body.name,email:req.body.email})
    res.redirect("/")
})
app.put("/users/:id/:bool",async (req,res)=>{
    await appfields.updateOne({_id:req.params.id},{isPromte:req.params.bool})  
    res.redirect('/') 

} )
app.delete("/users/:id",async (req,res)=>{
await appfields.deleteOne({_id:req.params.id})
res.redirect("/")
} )

app.listen(5000,()=>{console.log("connected Sucessfully")})