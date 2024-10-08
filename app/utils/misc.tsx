import moment from "moment";

export const kelvinToCelsius = (kelvin:number) => {
    return Math.round(kelvin - 273.15);
};

export const unixToTime = (unix:number,timezone:number)=>{
    return moment.unix(unix).utcOffset(timezone/60).format("HH:MM");
}


export const airQualityIndexTest = [
    {
        rating:20,
        description:"Good",
    },{
        rating:40,
        description:"fair",
    },{
        rating:60,
        description:"Moderate",
    },{
        rating:80,
        description:"Unhealthy for Sensitive Groups",
    },{
        rating:100,
        description:"Very Unhealthy",
    }
]
