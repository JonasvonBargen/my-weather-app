import { WiDaySunny, WiCloudy, WiDaySunnyOvercast, WiDayCloudy, WiDayShowers, WiDayRain, WiDayThunderstorm, WiDaySnow, WiDust} from 'weather-icons-react';


const weatherIcon = ({description}) => {
    if(description === "clear sky"){
        return(
            
            <WiDaySunny size={50}/>
        )
    }
    else if(description === "few clouds"){
        return(
            <WiCloudy size={50}/>
        )
    }
    else if(description === "scattered clouds"){
        return(
            <WiDaySunnyOvercast size={50}/>
        )
    }
    else if(description === "broken clouds"){
        return(
            <WiDayCloudy size={50}/>
        )
    }
    else if(description === "shower rain"){
        return(
            <WiDayShowers size={50}/>
        )
    }
    else if(description === "rain"){
        return(
            <WiDayRain size={50}/>
        )
    }
    else if(description === "thunderstorm"){
        return(
            <WiDayThunderstorm size={50}/>
        )
    }
    else if(description === "snow"){
        return(
            <WiDaySnow size={50}/>
        )
    }
    else if(description === "mist"){
        return(
            <WiDust size={50}/>
        )
    }
    else {
        return(
            <div></div>
        )
    }
}
export default weatherIcon;
