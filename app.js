
var express = require("express");
var app = express();
var port = process.env.PORT || 3000

app.use(express.json());

const crypto = require('crypto');
const apiKey = '$2y$10$cVc5FU0gmzvnMcHS5wi.9erdJ1qPsKjTv1RjYfNopLeC10Nfyl7cm';
const secretKey = "$2y$10$DHkc4KUis70s57hQvBPrfOBlbj.tonKXniTjUBpArymaVqOXxgcn.";
const sc_sms = '1990';
const sc_viber = 'ViberTest';
const service_id = '2724';

var type;
var msisdn;
var text;
var signature;
var data;
var platform;
var fallbackText;
var fileUrl;
var fileName;
var buttonName;
var buttonUrl;
var imageUrl;
var videoUrl;
var videoSize;
var videoDuration;
var thumbnailUrl;



app.post("/mcargs", (req, res) => {
  console.log("START");
  
  var params = req.body.inArguments;
  console.log("Request Params: " + params);
  //console.log("Request Event: " + JSON.stringify(req.body.inArguments[3]));
  
  for(var i in params){
    if (params[i].type == null) {
    }else{
      type = params[i].type;
      //check for the correct type here and throw an error?
    }
   if (params[i].msisdn == null) {
    }else{
      //format msisdn remove unnecessary characters?
      msisdn = params[i].msisdn;
    }
    if (params[i].text == null) {
    }else{
      text = params[i].text;
    }
    if (params[i].platform == null) {
    }else{
      platform = params[i].platform;
    }
    if (params[i].buttonName == null) {
    }else{
      buttonName = params[i].buttonName;
    }
    if (params[i].buttonUrl == null) {
    }else{
      buttonUrl = params[i].buttonUrl;
    }
    if (params[i].imageUrl == null) {
    }else{
      imageUrl = params[i].imageUrl;
    }
    if (params[i].fallbackText == null) {
    }else{
      fallbackText = params[i].fallbackText;
      fallback = { "sms" : fallbackText};
    }
  }
  console.log('Type: ' + type);
  console.log('Msisdn: ' + msisdn);
  console.log('Text: ' + text);
  console.log('Platform: ' + platform);
  console.log('Button Name: ' + buttonName);
  console.log('Button Url: ' + buttonUrl);
  console.log('Image Url: ' + imageUrl);
  console.log('Fallback Text: ' + fallbackText);
  

  switch (type){
    case 'sms':
       data = {
          "msisdn":     msisdn,
          "sc":         sc_sms,
          "text":       text,
          "service_id": service_id
       };
    break;
    case 'viber + text':
      //dynamic change of what is populated to be implemented
        data = {
            "msisdn":      msisdn,
            "sc":          sc_viber,
            "text":        text,
            "service_id":  service_id,
            "platform":    platform,
            "ButtonName":  buttonName,
            "ButtonUrl":   buttonUrl,
            "ImageUrl":    imageUrl,
            "fallback":    fallback
         };
    break;  
  }
  

  data = JSON.stringify(data);
  signature = crypto.createHmac("sha512", secretKey).update(data).digest('hex');
  console.log('Data: ' + data);
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

  console.log("END");
  res.send('End');

});

app.listen( port, () => console.log( `App listening on port ${port}!`) )
