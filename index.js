'use strict';

/**
 * Adds comma to a number
 * @param {number} number
 * @param {strong} locale
 * @return {strong}
 */
 module.exports = function(sourceText, sourceLanguage, targetLanguage) {
    return new Promise(function(resolve, reject) {            
        let encodedUrl = encodeURI('https://translate.googleapis.com/translate_a/single?client=gtx&sl=' + sourceLanguage + '&tl=' + targetLanguage + '&dt=t&q=' + sourceText);

        // Do the usual XHR stuff
        let request = new XMLHttpRequest();
        request.open('GET', encodedUrl);        

        request.onreadystatechange = function() {
            // This is called even on 404 etc
            // so check the status
            if (request.status == 200) {
                let json = JSON.parse(request.response);
                let fullText = '';
                for (let data of json[0]) {                    
                    fullText = fullText +  data[0];                        
                }

                // Resolve the promise with the response text
                resolve(fullText);
            } else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject('Rejected !' + request.status);
            }
        };

        // Handle network errors
        request.onerror = function() {
          reject(Error("Network Error"));
        };

        // Make the request
        request.send();
    });
}
