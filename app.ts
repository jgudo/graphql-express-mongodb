import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './graphql';
import connectToDB from './mongoose';

const port = process.env.PORT || 3000;
const app = express();

// Connect to MongoDB
connectToDB();

app.use(
    '/graphql',
    graphqlHTTP({ //All queries will go through this route. 
        //Directing express-graphql to use this schema to map out the graph 
        schema,
        //Directing express-graphql to use graphiql when goto '/graphql' address in the browser
        //which provides an interface to make GraphQl queries
        graphiql: true
    })
);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});