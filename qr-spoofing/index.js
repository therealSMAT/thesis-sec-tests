const express = require('express');
const app = express();
const qrCode = require('qrcode');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('index');
})

app.post("/scan", (req, res) => {
    const { plainText } = req.body;

    if (plainText.length === 0) res.send("Empty Data!");
    
    qrCode.toDataURL(plainText, (err, src) => {
        if (err) res.send("Error occured");
        res.render("scan", { src });
    });
});

const port = 9005;
app.listen(port, () => console.log(`Qr code server successfully started at port ${port}`));