const https = require('https');

//const qs = require('querystring');
//npm install axios
const axios = require('axios');
//npm install express
//npm install body-parser
const bodyparser = require('body-parser');
const express = require('express');
const { response } = require('express');

// const server = https.createServer((req,res) => {
//   console.log("reqmade");
// });


const app = express();



app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

let ac = 2020011131;

app.post("/inform",(req , res) => {
  let uri1 = `https://demo.techmbs.in/LP_POC//Api/LPService/UserBill?acc_id=${req.body.accId}`;
  console.log(req.body.accId); 
  axios({
    url : uri1,
    responseType: 'json'
  }).then(data => res.json(data.data))
})

app.post("/inform2",(req , res) => {
  let uri2 = `https://demo.techmbs.in/LP_POC/Api/LPService/AccountDetails?Accountid=${req.body.accId}`;
  console.log(req.body.accId); 
  axios({
    url : uri2,
    responseType: 'json'
  }).then(data => res.json(data.data))
})


app.listen(process.env.PORT || 3001,() => {
  console.log("listneing for request");
});


let uri = `https://demo.techmbs.in/LP_POC/Api/LPService/AccountDetails?Accountid=${ac}`;

// https.get(uri, (res) => {
//   //console.log(req);
//   let data = "";
//   res.on('data' , (chunk) => {
//     data = data+chunk;
//   });
//   res.on('end',() =>{
//     console.log("M" +data);
//     const abc = JSON.parse(data);
//     console.log(abc);
//     const abcd = abc.Bill;
//     console.log(abcd);
//     return data;
//   });
  
// }).on('error' , (err) => {
//   console.log(err);
// });

// app.get('https://demo.techmbs.in/LP_POC//Api/LPService/UserBill?acc_id=2020011131' ,(req , res) => {
//   console.log(req.body);
//   res.send(req.body);
// })


axios.get(uri).then(
  result => {
    let acc = result.data;
    console.log(acc);
  }
)
.catch(err => {
  console.log(err);
})


