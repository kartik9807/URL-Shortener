"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
const Shorten = () => {
    const [url, seturl] = useState("");
    const [shorturl, setShorturl] = useState("")
    const [generated, setGenerated] = useState("");
    const generate = ()=>{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "text/plain");

        const raw = JSON.stringify({
            "url":url,
            "shorturl":shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            seturl("");
            setShorturl("");
            console.log(result)
            if(result.success){
                setGenerated(`${window.location.origin}/${shorturl}`)
            }
            alert(result.message)})
        .catch((error) => console.error(error));
    }
    return (
        <div className='flex bg-purple-300 flex-col gap-4 max-w-lg mx-auto p-8 my-16 items-center text-black'>
            <h1 className='font-extrabold text-lg'>Generate your short URL</h1>
            <input
                type='text'
                placeholder='Enter your URL'
                required
                value={url}
                onChange={(e)=>seturl(e.target.value)}
                className='px-4 w-full py-2 border focus:outline-purple-600 rounded-md'
            ></input>
            <input
                type='text'
                value={shorturl}
                placeholder='Enter your prefer short URL text'
                required
                onChange={(e)=>setShorturl(e.target.value)}
                className='px-4 w-full py-2 border focus:outline-purple-600 rounded-md'
            ></input>
            <button onClick={generate} className='rounded-lg cursor-pointer w-full text-white bg-purple-500 shadow-lg p-2 hover:bg-purple-400 transition-bg duration-700'>Generate</button>
            {generated && <code>
                <span className='font-extrabold text-lg text-purple-900'>Your Link:-</span><Link target='_blank' href={generated}>{generated}</Link>
                </code>}
        </div>
    )
}

export default Shorten
