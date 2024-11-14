const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.get("/shout" , (req,res)=>{
  let name = req.query.name;
  let namehai = name.toUpperCase();
  res.send(namehai);
})

app.get("/fullname" , (req,res)=>{
  let first = req.query.first;
  let last = req.query.last;
  let fullname = first + " " + last;
  res.send(fullname);
})

app.get("/monthdate" , (req,res)=>{
  let month = req.query.month;
  let year = req.query.year;
  let finall = month +", " + year;
  res.send(finall);
})

app.get("/address" , (req,res)=>{
  let city = req.query.city;
  let state = req.query.state;
  let country = req.query.country;
  let finaladdress = city + ", " + state + ", " + country;
  res.send(finaladdress);
})

app.get("/distance" , (req,res)=>{
  let trip1 = parseFloat(req.query.trip1);
  let trip2 = parseFloat(req.query.trip2);
  let distancefinal = trip1 + trip2;
  res.send(distancefinal.toString());
})

// if else condition usage
app.get("/!positive", (req,res)=>{
  let number = parseFloat(req.query.number);
  let result;
  if(number>=0){
    result = "positive";
  } else{
   result = "negative"
  }

  res.send(result);
})

app.get("/check", (req,res)=>{
    let age = parseFloat(req.query.age);
    let result;
    if(age>=65){
      result = "woohoo discount";
    } else {
      result = "lol you are too young";
    }

    res.send(result);
})

app.get("/activity", (req,res)=>{
  let activity = parseFloat(req.query.activity);
  let result;
  if(activity>=10000){
    result = "woohoo high";
  } else if(activity<10000 && activity>5000) {
    result = "sahi hai bhai ";
  } else {
    result = "very low ";
  }

  res.send(result);
})
function calculatesum(num1,num2){
  let sum = num1+num2;
  return sum;
}
app.get("/sum", (req,res)=>{
  let num1  = parseFloat(req.query.num1);
  let num2  = parseFloat(req.query.num2);
  res.send(calculatesum(num1,num2).toString());
})

function discount(disc, price) {
  let final = (0.01 * disc) * price; // Use 'disc' instead of 'discount'
  let final2 = price - final;
  return final2;
}

app.get("/discount", (req, res) => {
  let disc = parseFloat(req.query.disc);
  let price = parseFloat(req.query.price);
  res.send(discount(disc, price).toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
