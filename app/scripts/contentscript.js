'use strict';

console.log('\'Allo \'Allo! Content script');

var pageContents = document.body.innerText; //string containing all the text from the current tab

console.log(pageContents)
