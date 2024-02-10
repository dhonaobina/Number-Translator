"use strict";

var language = document.getElementById('jstitle');
console.log("The contents of jstitle: ", language.innerHTML);

var bTags = document.getElementsByTagName('b');
console.log("\nAll the <b> tags in the document: ", bTags);
console.log("The first <b> tag: ", bTags[0].innerHTML);

var pTags = document.getElementsByTagName('p');
console.log("\nThe number of <p> tags: ", pTags.length);

var jstext = document.getElementById('jstext');

var jstextbTags = jstext.getElementsByTagName('b');

console.log("\nListing the <b> tags in jstext:", jstextbTags);

var jsdesc = document.getElementsByClassName('jsdescription');
console.log("\nThe innerHTML of the first jsdescription element: ", 
            jsdesc[0].innerHTML);

var select = document.querySelectorAll("i.jsdescription");
console.log("\nUsing the CSS selector i.jsdescription ", select[0].innerHTML);

var data = document.getElementById('jstitle');

console.log("\nModifying the innerHTML of an element:")
console.log("Old data : ", data.innerHTML);

var newData = data.innerHTML = "Programming with JS";
console.log("New data : ", newData);

























