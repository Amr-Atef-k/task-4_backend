const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

const partialsPath = path.join(__dirname, "../partials");
hbs.registerPartials(partialsPath);

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", {});
});

app.get("/weather", (req, res) => {
  res.render("weather", {});
});

// app.get("/weather", (req, res) => {
//   if(!req.query.address){
//     return res.send({
//       error : "no address"
//     })
//   }
//   res.send({
//     address : req.query.address
//   })
// });
const geocode = require("../functions/geocode");
const forecast = require("../functions/forecastFile");

app.get("/weather", (req, res) => {
  // if (!req.query.address) {
  //   return res.send({
  //     error: "You must provide address",
  //   });
  // }
  // geocode(req.query.address, (error, data) => {
  //   if (error) {
  //     return res.send({ error });
  //   }
  //   forecast(data.latitude, data.longitude, (error, forecastData) => {
  //     if (error) {
  //       return res.send({ error });
  //     }
  //     res.send({
  //       forecast: forecastData,
  //       location: req.query.address,
  //     });
  //   });
  // });
});

app.get("*", (req, res) => {
  res.send("ERROR404!! Page Not Found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
