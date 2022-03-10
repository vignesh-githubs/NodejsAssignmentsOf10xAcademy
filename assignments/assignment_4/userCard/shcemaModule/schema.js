const mongoose=require("mongoose")
const schema=mongoose.Schema

const schemaModel=new schema([{name:{type:String,unique:true,required:true}},{email:{type:String,unique:true,required:true}},
    {isPromte:{type:Boolean,default:null}}])

const appdata=mongoose.model("assignment4",schemaModel)
module.exports=appdata