
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
  
  var params = req.body.inArguments;

  for(var i in params){
    if (params[i].type == null) {
    }else{
      type = params[i].type;
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
    case 'viber + text':
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
    case 'viber + file':
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
    case 'viber + video':
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
    case 'viber + text + video':
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

  /*type = null;
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
  thumbnailUrl = null;*/
  
  console.log("END");
  res.send('End');

});

app.listen( port, () => console.log( `App listening on port ${port}!`) )
