Titanium.UI.setBackgroundColor('#fff');

var header = Titanium.UI.createWindow({
  url:      'js/header.js',
  top:      0
});
var body = Titanium.UI.createWindow({
  title:    'Concerti',
  url:      'js/concerts.js',
  top:      55
});

header.open();
body.open();