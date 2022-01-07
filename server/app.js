const express = require('express');
const gglHTTP = require('express-graphql').graphqlHTTP;

const app = express();

 app.use('/graphql', gglHTTP({
     graphiql: true
 }));

app.listen(4000, () => { //localhost: 4000
    console.log('Listening for requests on my awesome port 4000');
})