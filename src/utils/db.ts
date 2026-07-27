import mongoose from "mongoose";

export default async function connectDatabase() {
    const DATABASE_URL: string | undefined = process.env.DATABASE_URL;
    if (!DATABASE_URL) {
        throw new Error("Missing DATABASE_URL");
    }
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("Database Connected Successfully ✅")
    } catch (error) {
        console.error(error, "❌");
    }
}
