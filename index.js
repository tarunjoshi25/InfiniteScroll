const express = require("express");
const app = express();
const hbs = require("hbs");

const path = require("path");
const axios = require("axios");
const { log } = require("console");

app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "/views/partials"));

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", async (req, res) => {
  const response = await axios.get("https://fakestoreapi.com/products?limit=4");
  const details = response.data;
  
  res.render("index", { details });
});

app.get('/:id',async(req,res)=>{
  
    const params=parseInt(req.params['id']);
    const arr=[];
    for(let i=0;i<4;i++)
    {
      const {data}=await axios.get(`https://fakestoreapi.com/products/${params+i}`);
     
      arr.push(data);

    }

    return res.json(arr);

})
app.listen(3000, () => {
  console.log("server is running");
});
