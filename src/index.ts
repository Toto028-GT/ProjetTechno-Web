import express from 'express' 

const app = express()

app.get("/ping", (req, res) => res.sendStatus(200));

const server = app.listen(3000, () =>
    console.log("Server started on http://localhost:3000"),
  );



console.log('Hello World')
