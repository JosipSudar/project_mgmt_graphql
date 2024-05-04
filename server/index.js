require("dotenv").config();
require("colors");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const db = require("./config/db");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

db();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => console.log(`Listening on port ${port}`));
