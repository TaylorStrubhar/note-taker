const express = require('express');
// sets up express
const app = express();
const PORT = process.env.PORT || 3000;
// parsing with express
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
// static files with express
app.use(express.static('public'));
// routing
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// listen function
app.listen(PORT, function () {
    console.log('App is listening on PORT ' + PORT);
});