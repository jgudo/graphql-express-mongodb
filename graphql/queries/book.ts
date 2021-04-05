import { GraphQLID, GraphQLList } from 'graphql';
import Book from '../../models/book';
import BookType from '../types/book';

export const book = {
  type: BookType,
  //argument passed by the user while making the query
  args: { id: { type: GraphQLID } },
  resolve: (_, { id }) => {
    //Here we define how to get data from database source

    //this will return the book with id passed in argument 
    //by the user
    return Book.findById(id);
  }
}

export const books = {
  type: new GraphQLList(BookType),
  resolve: () => {
    return Book.find({});
  }
}