
var express = require("express");
var app = express();
var port = process.env.PORT || 3000

app.use(express.json());

const crypto = require('crypto');
const secretKey = "$2y$10$DHkc4KUis70s57hQvBPrfOBlbj.tonKXniTjUBpArymaVqOXxgcn.";

var type;
var msisdn;
var text;
var sc = '1990';
var service_id = '2724';
var signature;

app.post("/mcargs", (req, res) => {
  console.log("START");
  let data = {
     "msisdn":     "38977772032",
      "sc":         sc,
      "text":       "Test on Thursday",
      "service_id": service_id
  };
  data = JSON.stringify(data);
  signature = crypto.createHmac("sha512", secretKey).update(data).digest('hex');
  console.log('Signature: ' + signature);
  //console.log("BODY IN: " + JSON.stringify(req.body));
  const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
  fetch(
        'https://api-test.msghub.cloud/send',
    {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json',
            'x-api-key': '$2y$10$cVc5FU0gmzvnMcHS5wi.9erdJ1qPsKjTv1RjYfNopLeC10Nfyl7cm',
            'x-api-sign': signature
        }
    }
  )
    .then(function (a) {
        return a.json(); 
    })
    .then(function (json) {
        console.log(json)
    });

  //console.log('Response Body is: ' + JSON.parse(response.body));
  console.log("END");
  res.send('End');
});

app.listen( port, () => console.log( `App listening on port ${port}!`) )
