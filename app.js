
var express = require("express");
var app = express();
var port = process.env.PORT || 3000

app.use(express.json());
app.use(require('body-parser').raw({
    type: 'application/jwt'
}));

const crypto = require('crypto');
const apiKey = '$2y$10$cVc5FU0gmzvnMcHS5wi.9erdJ1qPsKjTv1RjYfNopLeC10Nfyl7cm';
const secretKey = "$2y$10$DHkc4KUis70s57hQvBPrfOBlbj.tonKXniTjUBpArymaVqOXxgcn.";
const sc_sms = '1990';
const sc_viber = 'ViberTest';
const service_id = '2724';
const url = 'https://api-test.msghub.cloud/send';
const yoursecret = 'lyLs_fmNXO7tVLgFnd5xvjZqloLnyBfpbdSfF-QohKjpVXjC_LoZJGsZiFPnHxT_PRTEjYJZ8k0TmdAsqK_mGtbPiVGFOtIHvHIexN1noxYazGLr2iY4_1X7tRp4F2dncqUvMLub_-l_aKdkBIBiUIQTutNaGbrI1ZOELnC_7r22rKWMlQ-UdPQ3kBTdz3iZv8mHSLdF3tKOrNhf6d1zAnkvo_l9N9BFjKqmIKNko01Qh_GfOHJ10Ysm0hMbuQ2';

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
  
  //start test for jwt
  console.log("Request Body: " + req.body.toString("utf8"));
  require('jsonwebtoken').verify(req.body.toString("utf8"), yoursecret, {
        algorithm: 'HS256'
    }, (err, decoded) => {
        // If the token was invalid err is set, otherwise the decoded payload can be found in decoded
        //console.log('Err: ' + err);
        console.log('Decoded Stringify: ' + JSON.stringify(decoded.inArguments[0],null,2));
        var paramsIn = JSON.stringify(decoded.inArguments[0],null,2);
        console.log('ParamsIn is: ' + paramsIn);
      
        if (JSON.stringify(decoded.inArguments[0].type,null,2) == null) {
        }else{
        type = JSON.stringify(decoded.inArguments[0].type,null,2);
        }
        if (JSON.stringify(decoded.inArguments[0].msisdn,null,2) == null) {
        }else{
        msisdn = JSON.stringify(decoded.inArguments[0].msisdn,null,2);
        }
        if (JSON.stringify(decoded.inArguments[0].text,null,2) == null) {
        }else{
        text = JSON.stringify(decoded.inArguments[0].text,null,2);
        }
        if (JSON.stringify(decoded.inArguments[0].platform,null,2) == null) {
        }else{
        platform = JSON.stringify(decoded.inArguments[0].platform,null,2);
        }
        if (JSON.stringify(decoded.inArguments[0].buttonName,null,2) == null) {
        }else{
        buttonName = JSON.stringify(decoded.inArguments[0].buttonName,null,2);
        }
        if (JSON.stringify(decoded.inArguments[0].buttonUrl,null,2) == null) {
        }else{
        buttonUrl = JSON.stringify(decoded.inArguments[0].buttonUrl,null,2)
        }
        if (JSON.stringify(decoded.inArguments[0].imageUrl,null,2) == null) {
        }else{
        imageUrl = JSON.stringify(decoded.inArguments[0].imageUrl,null,2);
        }
        if (JSON.stringify(decoded.inArguments[0].fallbackText,null,2) == null) {
        }else{
        fallbackText = JSON.stringify(decoded.inArguments[0].fallbackText,null,2);
        }
        if (JSON.stringify(decoded.inArguments[0].fileUrl,null,2) == null) {
        }else{
        fileUrl = JSON.stringify(decoded.inArguments[0].fileUrl,null,2);
        }
        if (JSON.stringify(decoded.inArguments[0].fileName,null,2) == null) {
        }else{
        fileName = JSON.stringify(decoded.inArguments[0].fileName,null,2);
        }
        if (JSON.stringify(decoded.inArguments[0].videoUrl,null,2) == null) {
        }else{
        videoUrl = JSON.stringify(decoded.inArguments[0].videoUrl,null,2);
        }
        if (JSON.stringify(decoded.inArguments[0].videoSize,null,2) == null) {
        }else{
        videoSize = JSON.stringify(decoded.inArguments[0].videoSize,null,2);
        }
        if (JSON.stringify(decoded.inArguments[0].videoDuration,null,2) == null) {
        }else{
        videoDuration = JSON.stringify(decoded.inArguments[0].videoDuration,null,2);
        }
        if (JSON.stringify(decoded.inArguments[0].thumbnailUrl,null,2) == null) {
        }else{
        thumbnailUrl = JSON.stringify(decoded.inArguments[0].thumbnailUrl,null,2);
        }

        console.log('Type: ' + type);
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

        console.log(typeof type);
        console.log(type == 'sms');  
        console.log(type === 'sms'); 

    });

   
   //end test for jwt      
  

  
  /*var params = req.body.inArguments;

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
    }
    if (params[i].fileUrl == null) {
    }else{
      fileUrl = params[i].fileUrl;
    }
    if (params[i].fileName == null) {
    }else{
      fileName = params[i].fileName;
    }
    if (params[i].videoUrl == null) {
    }else{
      videoUrl = params[i].videoUrl;
    }
    if (params[i].videoSize == null) {
    }else{
      videoSize = params[i].videoSize;
    }
    if (params[i].videoDuration == null) {
    }else{
      videoDuration = params[i].videoDuration;
    }
    if (params[i].thumbnailUrl == null) {
    }else{
      thumbnailUrl = params[i].thumbnailUrl;
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
  console.log('File Url: ' + fileUrl);
  console.log('File Name: ' + fileName);
  console.log('Video Url: ' + videoUrl);
  console.log('Video Size: ' + videoSize);
  console.log('Video Duration: ' + videoDuration);
  console.log('Thumbnail Url: ' + thumbnailUrl);

  switch (type){
    case 'sms':
       data = {
          "sc":         sc_sms,
          "service_id": service_id
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
            "sc":          sc_viber,
            "service_id":  service_id
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
            "sc":          sc_viber,
            "service_id":  service_id
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
            "sc":          sc_viber,
            "service_id":  service_id
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
            "sc":          sc_viber,
            "service_id":  service_id
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
  signature = crypto.createHmac("sha512", secretKey).update(data).digest('hex');
  console.log('Signature: ' + signature);
  
  const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
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
        console.log(json)
    });*/

  
  console.log("END");
  res.send('End');

});

app.listen( port, () => console.log( `App listening on port ${port}!`) )
