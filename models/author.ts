import { Document, model, Schema } from 'mongoose';

export interface IAuthorDoc extends Document {
    name: string;
    age: number;
}

const authorSchema = new Schema({
    name: String,
    age: Number
});

export default model<IAuthorDoc>('Author', authorSchema);