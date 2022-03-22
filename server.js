const express = require('express');
const mercadopago = require('mercadopago');
const app = express();

app.use(express.json());

app.get("/", function(req, res) {
	res.status(200).sendFile("index.html");
})

app.listen(3000, () =>{
	console.log("Running....")
})
