const express = require("express")
const bodyParser = require('body-parser');
const HTTP_PORT = 8080
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
    let body = req.body;
    let url = body.url;
    let QrCode = await qr(url);
    res.json({
        QrCode
    })
});

app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});