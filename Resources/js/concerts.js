var concerts_data = [
  {location: "Antù", concert_date: "08 marzo 2011", concert_time: "22:00", address: "Via Libetta 3, 00100 Roma", description: "Un bel concerto all'Antù bla bla Lorem ipsum bla bla Lorem ipsum bla bla Lorem ipsum bla bla Lorem ipsum bla bla Lorem ipsum bla bla Lorem ipsum bla bla Lorem ipsum bla bla Lorem ipsum bla bla Lorem ipsum bla bla Lorem ipsum bla bla Lorem ipsum bla bla Lorem ipsum bla bla Lorem ipsum bla bla Lorem ipsum bla bla Lorem ipsum bla bla Lorem ipsum bla bla Lorem ipsum bla bla Lorem ipsum bla bla Lorem ipsum"},
  {location: "Locanda Blues", concert_date: "07 aprile 2011", concert_time: "22:00", address: "Via Cassia 1284, 00100 Roma", description: "Un bel concerto alla Locanda bla bla Lorem ipsum"},
  {location: "Walla Walla", concert_date: "09 gennaio 2011", concert_time: "22:00", address: "Via di Tor Pagnotta 384/b, 00100 Roma", description: "Un bel concerto al Walla Walla bla bla Lorem ipsum"},
  {location: "Hard Rock Café", concert_date: "07 aprile 2011", concert_time: "18:00", address: "Via Veneto 23, 00100 Roma", description: "Un bel concerto all'Hard Rock bla bla Lorem ipsum"},
  {location: "Big Mama", concert_date: "16 marzo 2011", concert_time: "22:00", address: "Vicolo di San Francesco a Ripa 13, 00100 Roma", description: "Un bel concerto al big mama bla bla Lorem ipsum"}
];

//concerts_data.sort(function (a, b) {
//  if (a.concert_date < b.concert_date) return 1;
//  if (a.concert_date > b.concert_date) return -1;
//  if (a.concert_time < b.concert_time) return 1;
//  if (a.concert_time > b.concert_time) return -1;
//  return 0;
//});

var concerts = [];

for (var i = concerts_data.length - 1; i >= 0; i--)
{
  var row = Titanium.UI.createTableViewRow({opacity: 0.0});
  row.data = concerts_data[i];

  var location = Titanium.UI.createLabel({
    text:       row.data.location,
    font:       {fontSize: 16, fontWeight: 'bold'},
    width:      'auto',
    textAlign:  'left',
    left:       15,
    color:      '#a61000'
  });
  
  var date_time = Titanium.UI.createLabel({
    text:       row.data.concert_date + ' h' + row.data.concert_time,
    font:       {fontSize: 11},
    width:      'auto',
    textAlign:  'right',
    bottom:     5,
    right:      20,
    height:     10,
    color:      '#444'
  });

  row.add(location);
  row.add(date_time);


  row.className = 'concert_row';
  
  row.hasChild = true;

  concerts.push(row);
}

var concerts_table = Titanium.UI.createTableView({
  data:             concerts,
  backgroundImage:  'img/bkg.png'
});

concerts_table.addEventListener('click', function (e) {
  e.row.hasChild = false;

  var concert_window = Titanium.UI.createWindow({
    title:  e.row.data.location
  });

  var date_time = Titanium.UI.createLabel({
    text:       e.row.data.concert_date + ', ore ' + e.row.data.concert_time,
    top:        5,
    font:       {fontSize: 16, fontWeight: 'bold'},
    height:     20,
    width:      'auto',
    textAlign:  'left'
  });

  var address = Titanium.UI.createLabel({
    text:       e.row.data.address,
    top:        25,
    font:       {fontSize: 13, fontWeight: 'bold'},
    height:     20,
    width:      'auto',
    textAlign:  'left'
  });

  var description = Titanium.UI.createLabel({
    borderColor:  '#444',
    borderRadius: 10,
    height: 'auto',
    text:   e.row.data.description,
    top:    55,
    width:  'auto'
  });

  concert_window.add(date_time);
  concert_window.add(address);
  concert_window.add(description);

  var close_button = Titanium.UI.createButton({
    title:  'Close'
  });

  concert_window.setLeftNavButton(close_button);

  close_button.addEventListener('click', function(data) {
    concert_window.close();
  });

  concert_window.open({modal: true});

  e.row.hasChild = true;
});

var win = Titanium.UI.currentWindow;
win.add(concerts_table);