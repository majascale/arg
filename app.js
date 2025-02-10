
var express = require("express");
var app = express();
var port = process.env.PORT || 3000

app.use(express.json());

//let mcargs = [
//  {msisdn: "38977772032", sc: "1990", text: "Test on Thursday", service_id: "2724"}
//];

var msisdn;
var sc;
var text;
var service_id;

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
            'x-api-sign': '69444d25cd797797d8a5cf9d5f4f2a3b51646a2934b1b84f1c2f0035bbe85ef03bcd4891d9bded64068397894da9f97e885893b807745966aaa5dad886bed472',
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
