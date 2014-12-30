var webPage = require('webpage');
var page = webPage.create();

var system = require('system');


var settings={encoding: "utf8"};

page.open(system.args[1], settings,function (status) {
  console.log(page.plainText);
  phantom.exit();
});
