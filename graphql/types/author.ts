import { GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';
import Book from '../../models/book';
import BookType from './book';

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'Globally unique ID of the author'
    },
    name: {
      type: GraphQLString,
      description: 'Name of the author'
    },
    age: {
      type: GraphQLInt,
      description: 'Age of the author'
    },
    book: {
      type: new GraphQLList(BookType),
      description: 'Books written by the author',
      resolve: (parent, args) => {
        return Book.find({ authorID: parent.id });
      }
    }
  })
});

export default AuthorType;

