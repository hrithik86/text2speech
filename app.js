const express=require('express');
const app=express();
const bodyParser=require('body-parser');
// const TextToSpeech=require('text-to-speech-js');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});
// app.post("/text2speech",(req,res)=>{
//     var text=req.body.text;
//     // console.log(text);
//     var msg = new SpeechSynthesisUtterance('Hello World');
//     window.speechSynthesis.speak(msg);
//     res.redirect("/");
// })
app.listen(3000,()=>{
    console.log("Server started at localhost 3000");
})