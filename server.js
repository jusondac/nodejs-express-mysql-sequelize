const express = require('express')
const cors = require('cors')
const app = express()

const corsOptions = {
  origin: 'http://localhost:8081'
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// 
// ## connectivity to database ##
// 

const db = require("./models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

app.get('/', (req, res) => {
  res.json({message: 'Welcome to Rejka Industries'})
})

require("./routes/tutorial.routes")(app);

const port = process.env.port || 8080
app.listen(port, () => {
  console.log('Server is running on http://localhost:'+port)
})