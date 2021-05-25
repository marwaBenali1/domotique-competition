import React, { useState, useEffect } from 'react';

import { fetchWeather } from '../api/fetchWeater';


const App = () => {
    const [weather, setWeather] = useState({});
    
    const search = async () => {
        const data = await fetchWeather('Marrakech');

        setWeather(data);
    }

    useEffect(() => {

        search();

    }, [])


    return (
        <div>
            {weather.main && (
                <div className="row d-flex justify-content-center">
                    <div className="col-4 card d-flex align-items-center" style={{ opacity: 0.7}}>
                        
                        <h3 className="mt-3">
                            <span>{'Ben Guerir'}</span>
                            {/* <sup>{weather.sys.country}</sup> */}
                        </h3>

                        <div className="">
                            <p>{weather.weather[0].description}</p>

                            <h1 className="text-center">
                                {Math.round(weather.main.temp)}
                                <sup>&deg;</sup>
                            </h1>
                        </div>

                        <div className="info">
                            <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                            
                        </div>

                        

                    </div>
                </div>
            )}
        </div>
    );
}

export default App;