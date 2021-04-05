import { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
import Author from '../../models/author';
import AuthorType from './author';

const BookType = new GraphQLObjectType({
  name: 'Book',
  //We are wrapping fields in the function as we dont want to execute this ultil 
  //everything is inilized. For example below code will throw error AuthorType not 
  //found if not wrapped in a function
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    pages: { type: GraphQLInt },
    author: {
      type: AuthorType,
      resolve: (parent, args) => {
        return Author.findById(parent.authorID);
      }
    }
  })
});

export default BookType;
