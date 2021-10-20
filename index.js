const express = require("express");
const cors = require("cors");

const app = express();

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/Alaska", (req, res) => {
  const response = ["LETSSSSS GOOOOO!",
    "Congratulations!",
    "Good luck!",
    "Can I please be you",
    "You're going to have so much fun",
    "Yayyyyyyy!!!"
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * response.length);
  let randomResponse = response[randomIndex];

  res.status(200).send(randomResponse);

});

let salmon = [['king', 'June and July'], ['chum', 'June, July, August'], ['sockeye', 'July'], ['silver', 'August and september'], ['pink', 'July and August']]

app.post('/api/salmon', (req, res) => {
  let { name } = req.body
  name = name.toLowerCase()

  const nameSpaceSplit = name.split(' ')

  let result = 'try one of the salmon names on the page.';
  
  for (let i = 0; i < salmon.length; i++) {
    if (name == salmon[i][0]) {
      result = salmon[i][1]
    } else if (nameSpaceSplit[0] == salmon[i][0] && nameSpaceSplit[1] == 'salmon' && nameSpaceSplit[2] == null) {
      result = salmon[i][1]
    } else if (name == salmon[i][0] + 's') {
      result = salmon[i][1]
    }
  }

  res.status(200).send(result)
})


app.listen(4000, () => console.log("Server running on 4000"));