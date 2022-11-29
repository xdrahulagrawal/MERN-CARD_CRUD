import mongoose from "mongoose";

const Connection = async () => {
    const DATABASE = process.env.DATABASE;
    try {
        await mongoose.connect(DATABASE, { useNewUrlParser: true });
    } catch (error) {
        console.error('Error while connecting with the database', error.message);
    }
}

export default Connection;
