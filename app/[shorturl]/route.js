import { NextResponse } from "next/server";
import clientPromise from "@/lib/db.js";
export async function GET(_request,{params}){
    const {shorturl} = await params;
    
    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("urls")

    const url = await collection.findOne({shorturl});
    if(url){
        return NextResponse.redirect(url.url);
    }
    return NextResponse.redirect(new URL('/',process.env.NEXT_PUBLIC_HOST));
}