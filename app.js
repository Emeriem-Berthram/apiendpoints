const express = require("express")

const app = express()

const PORT = 3000

app.get("/emerie", (req,res)=>{
    res.send("Hello Get");
});

app.post("/emerie", (req,res)=>{
    res.send("Hello Post");
});

app.put("/emerie", (req,res)=>{
    res.send("Hello Put");
});

app.patch("/emerie", (req,res)=>{
    res.send("Hello Patch");
});

app.delete("/emerie", (req,res)=>{
    res.send("Hello World");
});


app.listen (PORT, () => {
    console.log('my app is working')
})