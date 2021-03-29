import { Document, model, Schema } from 'mongoose';

export interface IBookDoc extends Document {
    name: string;
    pages: number;
    authorID: string;
}

const bookSchema = new Schema({
    name: String,
    pages: Number,
    authorID: String
});

export default model<IBookDoc>('Book', bookSchema);