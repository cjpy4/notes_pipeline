function callCloudVisionAPI() {
var options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'x-goog-api-key': '',
    },
    payload: {
        "requests": [
          {
            "image": {
              "source": {
                "imageUri": "https://storage.googleapis.com/handwritten_notes/Screenshot%202023-02-04%20023114.png"
              }
             },
             "features": [
               {
                 "type": "DOCUMENT_TEXT_DETECTION"
               }
             ]
          }
        ]
      }
  }
  let response = UrlFetchApp.fetch('https://vision.googleapis.com/v1/images:annotate', options)
  
  console.log(response);
//let parsed = response.json();

//var convertedText = parsed['responses']['textAnotations']['text'];
//console.log(convertedText);

  return response;
}
