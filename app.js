const express = require('express');

const hbs = require ('hbs');
const path = require('path');

const app = express();


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials")
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


fetch ('https://api.punkapi.com/v2/beers'

).then((response)=>{
    return response.json()
})




// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/beers', (req, res) => {
  fetch ('https://api.punkapi.com/v2/beers')
  .then((element)=>{
  return element.json()
  })


  .then((beers)=>{
    res.render('beers', {beers})
  })
});

app.get('/random-beer', (req, res) => {
  fetch('https://api.punkapi.com/v2/beers/random')
  .then((element)=>{
    return element.json()
  })

  .then((data)=>{
    res.render('random-beer', {data})
  })
});


app.listen(3000, () => console.log('🏃‍ on port 3000'));
