import {MongoClient} from 'mongodb'
const uri = process.env.MONGODB_URI
    // const options = {
    //     useNewUrlParser:true,
    // }
let client;
let clientPromise;

if(!uri){
    throw new Error("Add mongo URI in env");
}
if(process.env.NODE_ENV === 'production'){
    if(!global._mongoClientPromise){
        client = new MongoClient(uri);
        global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
}else{
    client = new MongoClient(uri);
    clientPromise = client.connect();
}

export default clientPromise