import express from 'express';
import stratfortData from '../data/Stratford.json' assert { type: 'json' };
import harrowData from '../data/Harrow.json' assert { type: 'json' };
import heathrowData from '../data/Heathrow.json' assert { type: 'json' };

const app = express();
const port = 3030;

const routes = {
  "/pharmacies" : "returns an array of pharmacies in a specific area",
  "/colleges" : "returns an array of colleges in a specific area",
  "/doctors" : "returns an array of doctors in a specific area",
  "/hospitals" : "returns an array of hospitals in a specific area",
}

app.listen(port, () => {
  console.log(`Our amazing server is running at http://localhost:${port}/`);
})

app.get('/', (req, res) => {
  res.send(routes);
})


app.get('/:city/pharmacies', (req, res) => {
  const city = req.params.city.toLowerCase();
  if (city === 'stratford') {
    res.send(stratfortData.pharmacies)
  } else if (city === 'harrow') {
    res.send(harrowData.pharmacies)
  } else if (city === 'heathrow') {
    res.send(heathrowData.pharmacies)
  } else {
    res.send('City not found')
  }
})

app.get('/:city/colleges', (req, res) => {
  const city = req.params.city.toLowerCase();
  if (city === 'stratford') {
    res.send(stratfortData.colleges)
  } else if (city === 'harrow') {
    res.send(harrowData.colleges)
  } else if (city === 'heathrow') {
    res.send(heathrowData.colleges)
  } else {
    res.send('City not found')
  }
})

app.get('/:city/doctors', (req, res) => {
  const city = req.params.city.toLowerCase();
  if (city === 'stratford') {
    res.send(stratfortData.doctors)
  } else if (city === 'harrow') {
    res.send(harrowData.doctors)
  } else if (city === 'heathrow') {
    res.send(heathrowData.doctors)
  } else {
    res.send('City not found')
  }
})

app.get('/:city/hospitals', (req, res) => {
  const city = req.params.city.toLowerCase();
  if (city === 'stratford') {
    res.send(stratfortData.hospitals)
  } else if (city === 'harrow') {
    res.send(harrowData.hospitals)
  } else if (city === 'heathrow') {
    res.send(heathrowData.hospitals)
  } else {
    res.send('City not found')
  }
})









// app.get('/pharmacies', (req, res) => {
//   res.send(stratfortData.pharmacies)
// })
// app.get('/colleges', (req, res) => {
//   res.send(stratfortData.colleges)
// })
// app.get('/doctors', (req, res) => {
//   res.send(stratfortData.doctors)
// })
// app.get('/hospitals', (req, res) => {
//   res.send(stratfortData.hospitals)
// })

