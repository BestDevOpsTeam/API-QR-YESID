const express = require("express")
const bodyParser = require('body-parser');
const HTTP_PORT = 8014;
const app = express();
const qr = require('./qr.js');


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.get("/api/v1/health", async (req, res, next) => {
    res.json({
        "message": "Ok",
        "status": "UP",
        "team": "los mejores"
    })
});

app.post("/api/v1/qr", async (req, res, next) => {
    const body = req.body;
    const url = body.url;
    const QrCode = await qr(url);
    res.json({
        QrCode
    })
});

app.listen(HTTP_PORT, () => {
    console.log(`Server running on port ${HTTP_PORT}`)
});

module.exports = app;