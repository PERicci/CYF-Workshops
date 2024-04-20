import express from "express"

const app = express()
const port = process.env.PORT || 3030;

const routes = {
  "main": "/",
  "harrow": "/harrow",
  "heathrow": "/heathrow",
  "stratford": "/stratford",
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})