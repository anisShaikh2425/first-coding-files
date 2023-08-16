import  express  from  "express";
import BodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname= dirname(fileURLToPath(import.meta.url));
const app=express();
app.use(express.static("public"));
const port=3000;

app.set('view-engine', 'ejs');
app.get("/", (req,res)=>{
    res.render(__dirname + "/index.ejs");
})

app.get("/about", (req,res)=>{
    res.render( __dirname + "/about.ejs");
})

app.get("/contact",  (req,res)=>{
    res.render(__dirname + "/contact.ejs");
})

app.listen(port ,()=>{
    console.log("server is  running on port 3000");
})