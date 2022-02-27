const es =require("express")
const faker=require("faker")
const bodyparser=require("body-parser")
// const path=require("path") 
const server=es()
server.use(bodyparser())
// const fs=require("fs")
server.set('views', './views')
server.set('view engine', 'ejs')

users=[]
for (let i =0;i<5;i++){
    users.push({
        name:faker.name.findName(),
        email:faker.internet.email(),
        phoneNumber:faker.phone.phoneNumber()})}
// console.log(users[0].name)
server.get("/",(req,res)=>{
    res.render("index.ejs",{users})
 })


server.get("/form",(req,res)=>{res.render("form.ejs")})
server.post("/user/add",(req,res)=>{
    // console.log("hello from add user")
    users.push({
        name:req.body.name,
        email:req.body.email,
        phoneNumber:req.body.number,
    })
        console.log(req.body)
        res.redirect("/")

    
})
server.listen(3000,()=>{ console.log("listening")})