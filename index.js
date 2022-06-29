const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');

dotenv.config();

const cors = require('cors')
const app = express()
app.use(express.json())
app.use(morgan('combined'))
app.use(cors())


const fetch = require("node-fetch")

const HASURA_OPERATION = `
mutation signup($email: String!, $name: String!, $password: String!, $thumbnail: String!) {
  insert_user_one(object: {email: $email, name: $name, password: $password, thumbnail: $thumbnail}) {
    id
    name
    password
  }
}
`;

// execute the parent operation in Hasura
const execute = async (variables) => {
  const fetchResponse = await fetch(
    "http://localhost:8080/v1/graphql",
    {
      method: 'POST',
      body: JSON.stringify({
        query: HASURA_OPERATION,
        variables
      })
    }
  );
  const data = await fetchResponse.json();
  console.log('DEBUG: ', data);
  return data;
};
  

// Request Handler
app.post('/signup', async (req, res) => {

  // get request input
  const { email, name, thumbnail } = req.body.input;

  const salt = await bcrypt.genSalt();
  const password = await bcrypt.hash(req.body.input.password, salt);

  // run some business logic

  // execute the Hasura operation
  const { data, errors } = await execute({ email, name, password, thumbnail });

  // if Hasura operation errors, then throw error
  if (errors) {
    return res.status(400).json(errors[0])
  }

const tokenContents = {
  sub:data.insert_user_one.id.toString(),
  name:name,
  iat:Date.now()/1000,
  iss:'https://myapp.com/',
  "https://hasura.io/jwt/claims":{
    "x-hasura-allowed-roles":["user" , "anonymous"],
    "x-hasura-user-id":data.insert_user_one.id.toString(),
    "x-hasura-default-role":"user",
    "x-hasura-role":"user"
  },
  exp:Math.floor(Date.now() /1000) + (24*60*60)
}
  const token = jwt.sign(tokenContents ,'E6kld2fjg4h5sk5d6gk67js7k23fdsghbk' );
  // success
  return res.json({
    ...data.insert_user_one,
    token:token
  })

});


const port = process.env.PORT || 5000;
app.listen(port , () =>{
console.log(`App started on port ${port}`);
})