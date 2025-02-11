
var express = require("express");
var app = express();
var port = process.env.PORT || 3000

app.use(express.json());

const crypto = require('crypto');


//let mcargs = [
//  {msisdn: "38977772032", sc: "1990", text: "Test on Thursday", service_id: "2724"}
//];

var msisdn;
var sc;
var text;
var service_id;

let data = {
  "msisdn":     "38977772032",
  "sc":         "1990",
  "text":       "Test on Thursday",
  "service_id": "2724",
};

data = JSON.stringify(data);

let signature = crypto.createHmac("sha512", secret).update(data).digest('hex');
console.log('Signature: ' + signature);

app.post("/mcargs", (req, res) => {
  console.log("START");
  //console.log("BODY IN: " + JSON.stringify(req.body));
  const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
  fetch(
        'https://api-test.msghub.cloud/send',
    {
        method: 'POST',
        body: JSON.stringify({
            msisdn: '38977772032',
            sc: '1990',
            text: 'Test on Thursday',
            service_id: '2724'
        }),
        headers: {
            'Content-type': 'application/json',
            'x-api-key': '$2y$10$cVc5FU0gmzvnMcHS5wi.9erdJ1qPsKjTv1RjYfNopLeC10Nfyl7cm',
            'x-api-sign': '6faf7f7b1fe7d3b7e25eb61d4ef4cf072586562cd968c1141508b3bfe26d6dd72ce6dc3519ce2762960b87acece6499afd8e43863599107d0a59f109169e99e5',
            'Expect': ''
          
        }
    }
  )
    .then(function (a) {
        return a.json(); // call the json method on the response to get JSON
    })
    .then(function (json) {
        console.log(json)
    });

  //console.log('Response Body is: ' + JSON.parse(response.body));
  console.log("END");
  res.send('End');
});

app.listen( port, () => console.log( `App listening on port ${port}!`) )
