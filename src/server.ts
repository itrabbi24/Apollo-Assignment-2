import mongoose from "mongoose"
import config from "./config";
import app from "./app";




async function main() {
    try {

        // Connect to MongoDB
        await mongoose.connect(config.mongodb_url as string);

        // Start the server
        app.listen(config.port, () => {
            console.log(`Server is listening on port ${config.port}`)
          })
          
          
    } catch (error) {
        console.log(error)
    }
}



main();