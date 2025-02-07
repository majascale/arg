
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
  console.log("/mcargs request called");
  res.send('Welcome to service');
  //call another service
  //res.json(mcargs);
});

app.listen( port, () => console.log( `App listening on port ${port}!`) )
