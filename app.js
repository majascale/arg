
var express = require("express");
var app = express();
var port = process.env.PORT || 3000

app.use(express.json());

let mcargs = [
  {msisdn: "38977772032", sc: "1990", text: "Test on Thursday", service_id: "2724"}
];

app.post("/mcargs", (req, res) => {
  //const { name } = req.body;
  //const id = mcargs.length + 1;
  //mcargs.push({msisdn, sc, text, service_id });
  //res.json({ id, name });
  console.log("/mcargs request started");
  const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
  fetch(
    //'https://api-test.msghub.cloud/send',
    'https://7bf6a6b3-a1af-4ef1-924d-e3d64346c85a.mock.pstmn.io',
    {
        method: 'POST',
        body: JSON.stringify({
            msisdn: '38977772032',
            sc: '1990',
            text: 'Test on Thursday',
            service_id: '2724'
        }),
        headers: {
            'Content-type':
                'application/json',
            'x-api-key':
                'PMAK-67a5d7c6b03d40000130ceb9-82966bd953809aba82a8c8cd45447d6737',
            'x-api-sign':
                '9882ab2ab77624cfe55e3f075c0603fa855eadebb1108057df3ebf900328b39cc57bccaf1a0a9cb7bd6fe344a7f10cdd5fd92ae61871d02625fe63ffa457e3d3'   
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
  res.send('End');
});

app.listen( port, () => console.log( `App listening on port ${port}!`) )
