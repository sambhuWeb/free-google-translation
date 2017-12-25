Number Formatter
=========

A small and free library for google translation

## Installation

  `npm install free-google-translation`

## Usage

    let numFormatter = require('free-google-translation');

    let sourceText = 'How are you';
    let sourceLanguage = 'en';
    let targetLanguage = 'ne';

    googleTranslate(sourceText, sourceLanguage, targetLanguage)
    .then(function(response) {
        console.log('Translated Text 1', response);
    });
  
  
  Output should be `तिमीलाई कस्तो छ`


## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.