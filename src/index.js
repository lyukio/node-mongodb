const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes')

app.use(express.json())
app.use(routes)

mongoose.connect("mongodb+srv://lyukio:lyukio123@cluster0-7insk.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
app.listen(3333, () => console.log('Rodando'))