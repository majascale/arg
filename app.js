
var express = require("express");
var app = express();
var port = process.env.PORT || 3000

app.use(express.json());

const crypto = require('crypto');
const apiKey = '$2y$10$cVc5FU0gmzvnMcHS5wi.9erdJ1qPsKjTv1RjYfNopLeC10Nfyl7cm';
const secretKey = "$2y$10$DHkc4KUis70s57hQvBPrfOBlbj.tonKXniTjUBpArymaVqOXxgcn.";

var type;
var msisdn;
var text;
var sc = '1990';
var service_id = '2724';
var signature;

app.post("/mcargs", (req, res) => {
  console.log("START");
  //simplify to drill down than add arguments.execute
  var params = JSON.stringify(req.body.inArguments);
  console.log("Request Params: " + params);
  
  for(var i in params){
   if (params[i].type == null) {
   }else{
      type = params[i].type;
   }
  if (params[i].msisdn == null) {
   }else{
      msisdn = params[i].msisdn;
   }
   if (params[i].text == null) {
   }else{
      text = params[i].text;
   }

   console.log('Index:  ' + i);
}

  
  let data = {
     "msisdn":     "38977772032",
      "sc":         sc,
      "text":       "Test on Thursday13",
      "service_id": service_id
  };
  data = JSON.stringify(data);
  signature = crypto.createHmac("sha512", secretKey).update(data).digest('hex');
  console.log('Signature: ' + signature);
  
 
  
  const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
  fetch(
        'https://api-test.msghub.cloud/send',
    {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json',
            'x-api-key': apiKey,
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
