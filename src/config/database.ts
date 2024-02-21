import mongoose from 'mongoose';

require('dotenv').config();

/**
 * -------------- DATABASE ----------------
 */

const conn: string = process.env.MONGO_DATABASE_CONNECTION_STRING!;

const connection = mongoose.createConnection(conn, {
    useNewUrlParser: true,
    useUnifiedTopology: true
} as mongoose.ConnectOptions);

// Creates simple schema for a User.  The hash and salt are derived from the user's given password when they register
const UserSchema = new mongoose.Schema({
    username: String,
    hash: String,
    salt: String
});


const User = connection.model('User', UserSchema);

// Expose the connection
export default connection;