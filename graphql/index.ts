import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import * as AuthorMutation from './mutations/author';
import * as BookMutation from './mutations/book';
import * as AuthorQuery from './queries/author';
import * as BookQuery from './queries/book';

//RootQuery describe how users can use the graph and grab data.
const RootQuery = new GraphQLObjectType({
    name: 'Query',
    fields: {
        book: BookQuery.book,
        books: BookQuery.books,
        author: AuthorQuery.author,
        authors: AuthorQuery.authors
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: AuthorMutation.addAuthor,
        addBook: BookMutation.addBook
    }
});

//Creating a new GraphQL Schema, with options query which defines query 
//we will allow users to use when they are making request.
const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});

export default schema;