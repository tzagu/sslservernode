console.log('Starting server ...')
const express = require('express')
const https = require('https')
const path = require('path')
const fs = require('fs')
const req = require('express/lib/request')
const res = require('express/lib/response')

const app = express()

app.use('/', (req, res, next) => {
    res.send('Hello from server')
})

const sslServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname,'secure', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'secure', 'cert.pem'))
}, app)

sslServer.listen(3443, ()=> console.log('Secure server listening on 3443'))