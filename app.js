var express = require("express");
var app = express();
var port = process.env.PORT || 3000

app.use(express.json());
app.use(require('body-parser').raw({
    type: 'application/jwt'
}));

const constants = require('./constants');
const crypto = require('crypto');
//const apiKey = '$2y$10$cVc5FU0gmzvnMcHS5wi.9erdJ1qPsKjTv1RjYfNopLeC10Nfyl7cm';
//const secretKey = "$2y$10$DHkc4KUis70s57hQvBPrfOBlbj.tonKXniTjUBpArymaVqOXxgcn.";
//const sc_sms = '1990';
//const sc_viber = 'ViberTest';
//const service_id = '2724';
//const url = 'https://api-test.msghub.cloud/send';
//const yoursecret = 'lyLs_fmNXO7tVLgFnd5xvjZqloLnyBfpbdSfF-QohKjpVXjC_LoZJGsZiFPnHxT_PRTEjYJZ8k0TmdAsqK_mGtbPiVGFOtIHvHIexN1noxYazGLr2iY4_1X7tRp4F2dncqUvMLub_-l_aKdkBIBiUIQTutNaGbrI1ZOELnC_7r22rKWMlQ-UdPQ3kBTdz3iZv8mHSLdF3tKOrNhf6d1zAnkvo_l9N9BFjKqmIKNko01Qh_GfOHJ10Ysm0hMbuQ2';

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
var sc_sms;


app.post("/mcargs", (req, res) => {
  console.log("START");

  type = null;
  msisdn = null;
  text = null;
  platform = null;
  fallbackText = null;
  fileUrl = null;
  fileName = null;
  buttonUrl = null;
  buttonName = null;
  imageUrl = null;
  videoUrl = null;
  videoSize = null;
  videoDuration = null;
  thumbnailUrl = null; 
  data = null;
  sc_sms = null;  
  
  //start jwt
  console.log("Request Body: " + req.body.toString("utf8"));
  require('jsonwebtoken').verify(req.body.toString("utf8"), constants.jwtSecret, {
        algorithm: 'HS256'
    }, (err, decoded) => {
        // If the token was invalid err is set, otherwise the decoded payload can be found in decoded
        //console.log('Err: ' + err);
        console.log('Decoded Stringify: ' + JSON.stringify(decoded.inArguments[0],null,2));
        //console.log('Test type ' + decoded.inArguments[0].type);
       
        var params = decoded.inArguments[0];
      
        if (decoded.inArguments[0].type == null) {
        }else{
              type = decoded.inArguments[0].type;
        }
        if (decoded.inArguments[0].sc_sms == null) {
        }else{
              sc_sms = decoded.inArguments[0].sc_sms;
        }
        if (decoded.inArguments[0].msisdn == null) {
        }else{
              msisdn = decoded.inArguments[0].msisdn;
        }
        if (decoded.inArguments[0].text == null) {
        }else{
              text = decoded.inArguments[0].text;
        }
        if (decoded.inArguments[0].platform == null) {
        }else{
              platform = decoded.inArguments[0].platform;
        }
        if (decoded.inArguments[0].buttonName == null) {
        }else{
              buttonName = decoded.inArguments[0].buttonName;
        }
        if (decoded.inArguments[0].buttonUrl == null) {
        }else{
              buttonUrl = decoded.inArguments[0].buttonUrl;
        }
        if (decoded.inArguments[0].imageUrl == null) {
        }else{
              imageUrl = decoded.inArguments[0].imageUrl;
        }
        if (decoded.inArguments[0].fallbackText == null) {
        }else{
              fallbackText = decoded.inArguments[0].fallbackText;
        }
        if (decoded.inArguments[0].fileUrl == null) {
        }else{
              fileUrl = decoded.inArguments[0].fileUrl;
        }
        if (decoded.inArguments[0].fileName == null) {
        }else{
              fileName = decoded.inArguments[0].fileName;
        }
        if (decoded.inArguments[0].videoUrl == null) {
        }else{
              videoUrl = decoded.inArguments[0].videoUrl;
        }
        if (decoded.inArguments[0].videoSize == null) {
        }else{
              videoSize = decoded.inArguments[0].videoSize;
        }
        if (decoded.inArguments[0].videoDuration == null) {
        }else{
              videoDuration = decoded.inArguments[0].videoDuration;
        }
        if (decoded.inArguments[0].thumbnailUrl == null) {
        }else{
              thumbnailUrl = decoded.inArguments[0].thumbnailUrl;
        }

        console.log('Type: ' + type);
        console.log('sc_sms: ' + sc_sms);
        console.log('Msisdn: ' + msisdn);
        console.log('Text: ' + text);
        console.log('Platform: ' + platform);
        console.log('Button Name: ' + buttonName);
        console.log('Button Url: ' + buttonUrl);
        console.log('Image Url: ' + imageUrl);
        console.log('Fallback Text: ' + fallbackText);
        console.log('File Url: ' + fileUrl);
        console.log('File Name: ' + fileName);
        console.log('Video Url: ' + videoUrl);
        console.log('Video Size: ' + videoSize);
        console.log('Video Duration: ' + videoDuration);
        console.log('Thumbnail Url: ' + thumbnailUrl); 

        switch (type){
           case 'sms':
              data = {
                       "sc": sc_sms,
                       "service_id": constants.service_id
              };
              if(msisdn != null){
                 data.msisdn = msisdn;
              }
              if(text != null){
                 data.text = text;
              }
              break;
           case 'viber+text':
              data = {
                       "sc": constants.sc_viber,
                       "service_id": constants.service_id
              };
              if(msisdn != null){
                 data.msisdn = msisdn;
              }
              if(text != null){
                 data.text = text;
              }
              if(platform != null){
                 data.platform = platform;
              }
              if(fallbackText != null){
                  data.fallback = {"sms" : fallbackText};
              }
              if(buttonName != null){
                 data.ButtonName = buttonName;
              } 
              if(buttonUrl != null){
                 data.ButtonUrl = buttonUrl;
              } 
             if(imageUrl != null){
                data.ImageUrl = imageUrl;
             } 
             break;
          case 'viber+file':
             data = {
                      "sc": constants.sc_viber,
                      "service_id": constants.service_id
             };
             if(msisdn != null){
                data.msisdn = msisdn;
             }
             if(platform != null){
               data.platform = platform;
             }
             if(fallbackText != null){
                data.fallback = {"sms" : fallbackText};
             }
             if(fileUrl != null){
                data.FileUrl = fileUrl;
             }
             if(fileName != null){
                data.FileName = fileName;
             }
             break;
          case 'viber+video':
             data = {
                      "sc": constants.sc_viber,
                      "service_id": constants.service_id
             };
             if(msisdn != null){
                data.msisdn = msisdn;
             }
             if(platform != null){
                data.platform = platform;
             }
             if(fallbackText != null){
                data.fallback = {"sms" : fallbackText};
             } 
            if(buttonName != null){
               data.ButtonName = buttonName;
            } 
            if(buttonUrl != null){
               data.ButtonUrl = buttonUrl;
            } 
            if(videoUrl != null){
               data.VideoUrl = videoUrl;
            } 
            if(videoSize != null){
               data.VideoSize = videoSize;
            } 
            if(videoDuration != null){
               data.Duration = videoDuration;
            } 
            if(thumbnailUrl != null){
               data.ThumbnailUrl = thumbnailUrl;
            } 
            break;
          case 'viber+text+video':
             data = {
                      "sc": constants.sc_viber,
                      "service_id": constants.service_id
             };
             if(msisdn != null){
                data.msisdn = msisdn;
             }
             if(text != null){
                data.text = text;
             }
             if(platform != null){
                data.platform = platform;
             }
             if(fallbackText != null){
                data.fallback = {"sms" : fallbackText};
             }
            if(buttonName != null){
               data.ButtonName = buttonName;
            } 
            if(buttonUrl != null){
               data.ButtonUrl = buttonUrl;
            } 
            if(videoUrl != null){
               data.VideoUrl = videoUrl;
            } 
            if(videoSize != null){
               data.VideoSize = videoSize;
            } 
            if(videoDuration != null){
               data.Duration = videoDuration;
            } 
            if(thumbnailUrl != null){
               data.ThumbnailUrl = thumbnailUrl;
            } 
            break;            
        }  
       
        data = JSON.stringify(data);
        console.log('Data: ' + data);  
        signature = crypto.createHmac("sha512", constants.secretKey).update(data).digest('hex');
        console.log('Signature: ' + signature);

        const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
        fetch(
           constants.url,
           {
           method: 'POST',
           body: data,
           headers: {
              'Content-type': 'application/json',
              'x-api-key': constants.apiKey,
              'x-api-sign': signature
           }
          }
       )
       .then(function (a) {
        return a.json(); 
       })
       .then(function (json) {
        console.log(json);
        res.status(json['meta'].code).send('SENT');   
       })      
       .catch(function(error) {
        console.log(error);
        res.send('ERROR');   
       });   

      console.log("END");
      //res.send('End');
      
  });
   
      

  //data = JSON.stringify(data);
  //console.log('Data: ' + data);  
  //signature = crypto.createHmac("sha512", secretKey).update(data).digest('hex');
  //console.log('Signature: ' + signature);

    
  /*const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
     fetch(
           url,
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
        console.log(json);
    })      
    .catch(function(error) {
        console.log(error);
    });   */
  

  
  //console.log("END");
  //res.send('End');

});

app.listen( port, () => console.log( `App listening on port ${port}!`) )
