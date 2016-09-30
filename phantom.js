var webpage = require('webpage');
var page = webpage.create();

page.open('http://localhost:3000', function(res) {
    console.log(res);
    phantom.exit();
});

console.log('Opening the page now..');