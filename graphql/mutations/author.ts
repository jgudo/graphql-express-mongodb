import { GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';
import Author, { IAuthorDoc } from '../../models/author';
import AuthorType from '../types/author';

export const addAuthor = {
  type: AuthorType,
  args: {
    //GraphQLNonNull make these field required
    name: { type: new GraphQLNonNull(GraphQLString) },
    age: { type: new GraphQLNonNull(GraphQLInt) }
  },
  resolve: (parent, args): Promise<IAuthorDoc> => {
    // TODO 
    // Perform arguments checking

    let author = new Author({
      name: args.name,
      age: args.age
    });
    return author.save();
  }
};
