import clientPromise from "@/lib/db.js";

export async function POST(request) {
    const body = await request.json();
    if(body.url.trim() === "" || body.shorturl.trim() === ""){
        return Response.json({success:false,message:"Enter all the fields correctly"})
    }
    console.log(body);
    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("urls")

    const url = await collection.findOne({shorturl:body.shorturl});
    if(url){
        return Response.json({success:false,data:"",message:"ShortURL already existed"});
    }

    const result = await collection.insertOne({
        url:body.url,
        shorturl:body.shorturl
    })
    return Response.json({success:true,data:result,message:"short url generated successfully"});
}