//req = request object
//res = respond to object
//might need to refresh browser to get page to update

const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "./public")));
app.set("view engine", "ejs");

const inventory = [
    { name: "sirloin", type: "beef", amount: 25 }, 
    { name: "ribs", type: "pork", amount: 0 },
    { name: "wings", type: "chicken", amount: 10 },
    { name: "breast", type: "chicken", amount: 5 },
    { name: "cod", type: "fish", amount: 22 },
    { name: "haddock", type: "fish", amount: 2 },
    { name: "chops", type: "pork", amount: 0 },
];

app.get("/", (req, res) => {
    //loads of code in here
    //will link to landing.ejs
    let username = "Aimee";
    res.render("landing", {data : username, stock : inventory});
});

app.get("/playlist", (req, res)=>{
    res.send("my playlist");
});

//if you put anything after playlist/ in the browser it will still bring up the 'my playlist' page
//have to include /: in order for it to work
app.get("/playlist/:playId", (req, res)=>{
    //this is more for testing purposes
    //grabbing information
    let id = req.params.playId;
    //posting to the server
    res.send(`SELECT * FROM playlists where ID = ${id}`);
});

//add ?q= to the end of http in the browser then add anything to change the page
app.get("/products", (req, res) => {
    let queryq = req.query.q;
res.send(`SELECT * FROM products WHERE name like (${queryq})`);
});

//port = 3000
//callback = ()=>{});
app.listen(3000, (err)=>{
//one line condition
if(err) throw err;

console.log(`listening port 3000`);
});
