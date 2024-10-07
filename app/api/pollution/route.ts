import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    try{
        const apiKey = process.env.OPENWEATHERMAP_API_KEY;
        const lat = 28.6139;
        const lon = 77.2090;
        const url=`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
        
        const res =await axios.get(url);

        return NextResponse.json(res.data);
    }catch(error){
        console.log("Error in getting pollution data",error);
        return new Response("Error fetching pollution data", {status:500});
        
    }
}