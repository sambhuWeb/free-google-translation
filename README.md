# FREE Google Translation

## Publishing NPM Package

  1. Create & PUsh Git Tag:
  
        git tag v1.0.2
        git push origin --tags
  
  2. Login to Npm
  
         npm login
         userename: r******
         password: ***
         email: sam***.***.*****@****.com
   
     To Verify if Logged in:
     
         npm whoami 
    
  3. Modify the tag version on package.json as below:
  
         {
           "name": "free-google-translation",
           "version": "1.0.1",
           ...
         }
         
  4. Publish the package in npm js
  
         npm publish 
         
        Will Give Following output:
        
         npm notice 
         npm notice 📦  free-google-translation@1.0.2
         npm notice === Tarball Contents === 
         npm notice 796B  package.json
         npm notice 1.6kB index.js    
         npm notice 1.1kB LICENSE     
         npm notice 2.0kB README.md   
         npm notice === Tarball Details === 
         npm notice name:          free-google-translation                 
         npm notice version:       1.0.2                                   
         npm notice package size:  2.6 kB                                  
         npm notice unpacked size: 5.4 kB                                  
         npm notice shasum:        e66a4b5cce9341f315fbff718654ebcc28404729
         npm notice integrity:     sha512-h2V44NksL7XkH[...]EJUqSbYkDS4+Q==
         npm notice total files:   4                                       
         npm notice 
         + free-google-translation@1.0.2



## Installation

  `npm install free-google-translation`

## Usage

    let numFormatter = require('free-google-translation');

    let sourceText = 'How are you';
    let sourceLanguage = 'en';
    let targetLanguage = 'ne';

    googleTranslate(sourceText, sourceLanguage, targetLanguage)
    .then(function(response) {
        console.log(response);
    });
  
  
  Output should be `तिमीलाई कस्तो छ`
