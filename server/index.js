const express = require('express')
const app = express()
const port = 3000
const router = require('./router');

const cors = require('cors')
app.use(cors());

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Alreet m8, am listenin on ${port}`);
})