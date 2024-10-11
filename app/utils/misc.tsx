import moment from "moment";

export const kelvinToCelsius = (kelvin:number) => {
    return Math.round(kelvin - 273.15);
};

export const unixToTime = (unix:number,timezone:number)=>{
    return moment.unix(unix).utcOffset(timezone/60).format("HH:MM");
}


export const formatNumber = (num:number)=>{
    if(num>=1000000){
        return (num/1000000).toFixed(1) + "M";
    }else if(num>=1000){
        return (num/1000).toFixed(1)+"K";

    }else{
        return ;
    }
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
