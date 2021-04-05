import { GraphQLID, GraphQLList } from 'graphql';
import Author from '../../models/author';
import AuthorType from '../types/author';

export const author = {
  type: AuthorType,
  args: { id: { type: GraphQLID } },
  resolve: (parent, args) => {
    return Author.findById(args.id);
  }
};

export const authors = {
  type: new GraphQLList(AuthorType),
  resolve: (parent, args) => {
    return Author.find({});
  }
}