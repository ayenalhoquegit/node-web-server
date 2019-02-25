const express = require('express');
const app 	  = express();
const hbs     = require('hbs');

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
// meddileware 
app.use((req,res,next)=>{
	let date = new Date().toString();
	let log  = `${date}: ${req.method} ${req.url}`
	console.log(`date : ${log}`);
	next();
});
// static middleware
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
	res.render('home.hbs', {
		pageTitle : 'Home page',
		currentDate : new Date().getFullYear()
	})
});

app.get('/about', (req, res)=>{
	res.render('about.hbs', {
		pageTitle : 'About page',
		currentDate : new Date().getFullYear()
	})
});

app.get('/bad', (req, res)=>{
	res.send({
		errorMessage:'Unable to connect'
	})
});





app.listen(3000, ()=>{
	console.log('Server is running on port 3000')
});