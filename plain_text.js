var webPage = require('webpage');
var page = webPage.create();

var system = require('system');




page.open(system.args[1], function (status) {
  console.log(page.plainText);
  phantom.exit();
});
