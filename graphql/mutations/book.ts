import { GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';
import Author from '../../models/author';
import Book, { IBookDoc } from '../../models/book';
import BookType from '../types/book';

export const addBook = {
  type: BookType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    pages: { type: new GraphQLNonNull(GraphQLInt) },
    authorID: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolve: async (parent, args): Promise<IBookDoc> => {
    try {
      const author = await Author.findById(args.authorID);

      if (!author) throw new Error('Author not found.');

      const book = new Book({
        name: args.name,
        pages: args.pages,
        authorID: args.authorID
      });

      return book.save();
    } catch (err) {
      console.log('ERROR -----------------', err);
      throw new Error('Unable to add new book');
    }
  }
};