# plantie backend application

## GA SEIR-329 Unit 3 Group Project

## Team Members:
## Teddi Manibusan, Meqdad Salehi, Will Truscott, Connor Jacobs

### Description:

For full project details, visit our [Notion page](https://www.notion.so/GA-Unit-3-Project-7468ee4d35364a4fb26a59118dcb63c5)

This backend application was built with Node.js, Express.js, and Mongoose.

Connection / Server:
Mongoose established a connection with a MongoDB Atlas database.
The server utilizes cors, morgan, and dotenv for various middleware and environment management.

Schemas:
Two schemas were defined for Plant and Garden. The Plant represents a document containing pre-determined information regarding sunlight, watering, etc.
The Garden schema is our version of a User schema. It contains information like email/password, but also a "plants" array. Each object in this array contains information specific to one plant, like its name and birthday, as well as a key "species" that references an ObejctId of one of the Plant model documents.

Controllers:
A Plant controller was created for the purpose of populating the Plant database with options for the user to select when entering information about their own plants.
The Garden controller handles all the routes that come from the frontend, including adding, updating, and deleting individual plants from a user's "Garden".

