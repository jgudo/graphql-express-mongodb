import mongoose from 'mongoose';

const mongodbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = process.env.DB_NAME || 'graphql_express';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  serverSelectionTimeoutMS: 5000,
  dbName
};

const connectToDB = async () => {
  try {
    await mongoose.connect(mongodbURI, options);

  } catch (err) {
    console.log(`Unable to connect MONGODB ${err}`);
  }
}

mongoose.connection.once('open', () => {
  console.log(`Connected to MONGODB at ${mongodbURI}`);
});

export default connectToDB;
