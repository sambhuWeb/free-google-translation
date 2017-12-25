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
        console.log(response);
    });
  
  
  Output should be `तिमीलाई कस्तो छ`
