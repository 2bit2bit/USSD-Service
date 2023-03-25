const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  const { sessionId, serviceCode, phoneNumber, text } = req.body;

  let response = "";
  let accountNumber = "ACC1001";
  balance = "NGN 10,000";

  switch (text) {
    case "":
      response = "CON What would you want to check \n";
      response += "1. My Account \n";
      response += "2. My phone number";
      break;
    case "1":
      response = "CON Choose account information you want to view \n";
      response += "1. Account number \n";
      response += "2. Account balance";
      break;
    case "1*1":
      response = "END Your account number is " + accountNumber;
      break;
    case "1*2":
      response = "END Your balance is " + balance;
      break;    
    case "2":
      response = "END Your phone number is " + phoneNumber;
    default:
      break;
  }
  console.log(sessionId, text)
  res.set('Content-Type: text/plain');
  res.send(response);
});

app.post("/events", (req, res) => {
    console.log('###### \n events \n', req.body);
})

app.listen(80, () => {
  console.log("Server started on port 80");
});
