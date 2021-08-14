
const WeatherForecast = ({weatherData}) => (
    <div className="forecast">
      <div style={{border:"transparent"}}>
        <div style={{fontSize:"35px"}}>Date</div>
        <div>{weatherData.list[8].dt_txt.substr(8,2)}.{weatherData.list[8].dt_txt.substr(5,2)}</div>
        <div>{weatherData.list[16].dt_txt.substr(8,2)}.{weatherData.list[16].dt_txt.substr(5,2)}</div>
        <div>{weatherData.list[24].dt_txt.substr(8,2)}.{weatherData.list[24].dt_txt.substr(5,2)}</div>
        <div>{weatherData.list[32].dt_txt.substr(8,2)}.{weatherData.list[32].dt_txt.substr(5,2)}</div>
      </div>
      <div>
        <div style={{fontSize:"35px"}}>Temp</div>
        <div>{weatherData.list[8].main.temp}&deg;C</div>
        <div>{weatherData.list[16].main.temp}&deg;C</div>
        <div>{weatherData.list[24].main.temp}&deg;C</div>
        <div>{weatherData.list[32].main.temp}&deg;C</div>
      </div>
      <div style={{}}>
        <div style={{fontSize:"35px"}}>Descr</div>
        <div>{weatherData.list[8].weather[0].description}</div>
        <div>{weatherData.list[16].weather[0].description}</div>
        <div>{weatherData.list[24].weather[0].description}</div>
        <div>{weatherData.list[32].weather[0].description}</div>
      </div>
    </div>
)
export default WeatherForecast;

/*
const WeatherForecast = ({weatherData}) => (
    <div className="forecast">
      <div >
        <div style={{fontSize:"35px"}}>Date</div>
        <div style={{fontSize:"35px"}}>Temp</div>
        <div style={{fontSize:"35px"}}>Descr</div>
      </div>
      <div>
        <div>{weatherData.list[8].dt_txt.substr(8,2)}.{weatherData.list[8].dt_txt.substr(5,2)}</div>  
        <div>{weatherData.list[8].main.temp}&deg;C</div>
        <div>{weatherData.list[8].weather[0].description}</div> 
      </div>
      <div>
        <div>{weatherData.list[16].dt_txt.substr(8,2)}.{weatherData.list[16].dt_txt.substr(5,2)}</div>
        <div>{weatherData.list[16].main.temp}&deg;C</div>
        <div>{weatherData.list[16].weather[0].description}</div>
      </div>
      <div>
          
        <div>{weatherData.list[24].dt_txt.substr(8,2)}.{weatherData.list[24].dt_txt.substr(5,2)}</div>
        <div>{weatherData.list[24].main.temp}&deg;C</div>
        <div>{weatherData.list[24].weather[0].description}</div>
      </div>
      <div>
          
        <div>{weatherData.list[32].dt_txt.substr(8,2)}.{weatherData.list[32].dt_txt.substr(5,2)}</div>
        <div>{weatherData.list[32].main.temp}&deg;C</div>
        <div>{weatherData.list[32].weather[0].description}</div>
      </div>
    </div>
)*/