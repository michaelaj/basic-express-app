var express = require('express');

var app = express();


app.set('view engine', 'ejs');


var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Routes

// Home Routes
app.get('/', routes.home);

// movie single
app.get('/episode/:episode_number?', routes.movie_single);

// not found
app.get('*', routes.notFound);

// app.listen(3000, function() {
//   console.log("This application is running on localhost:3000");
// });

app.listen(process.env.PORT || 3000);
