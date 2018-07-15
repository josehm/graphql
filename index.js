const express = require("express")
const bodyParser = require("body-parser")
const { graphqlExpress } = require("apollo-server")
const schema = require("./schema")
const app = express()

app.use({
    '/graphql',
    bodyParser.json(),
    graphqlExpress({
        schema
    })
})

app.use({
    '/graphiql',
    grapiqlExpress({
        endpointURL: '/graphql'
    })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor funcionando");
});