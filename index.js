//Loads the express module
const express = require('express');
const handlebars = require('express-handlebars');

//Creates our express server
const app = express();
const port = 3000;
//Serves static files (we need it to import a css file)
app.use(express.static('public'))
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    }));

//Sets a basic route
app.get('/',(req,res)=>{
    res.render('main', {layout : 'index'});
})

//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));