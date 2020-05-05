const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true}));
app.use(epxress.json());

//what routes do we need:
  //home page (GET)
  //make a reservation page (GET)
  //api request handler to show current tables (GET)
  //api request handler to show waiting list (GET)
  //api route to handle posting of a new reservation request (POST)

//what vars do we need?
  // who has a reservation (array)
  // who is on the waiting list (array)

const reservations =[];
const waitingList =[];

app.get("/", function(req, res){
  // send back index.html file
});

app.get("/reservation", function(req, res){
  // send back the reservation request html file
});

app.get("/api/tables", function(req, res){
//  send back json of all current tables reserved
});

app.get("/api/waitinglist", function(req, res){
//  send back json of everyone on the waiting list
});

app.post("/api/newreservation", function(req, res){
//  parse posted data and do whatever needs to be done
})

app.listen(PORT, function() {
  console.log("App.port")
})