import "./App.css";
import { useState } from "react";
import { useQuery } from "./hooks/useQuery";

function Weather() {
  const [location, setLocation] = useState("");
  const {
    data: weather,
    errorMssg,
    status,
  } = useQuery(
    [location],
    `https://api.weatherapi.com/v1/current.json?key=3c1465617acd467ca89113605241806&q=${location}`
  );
  return (
    <>
      <input
        type="text"
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div>
        {status === "idle" && <p>Add location.</p>}
        {status === "loading" && <p>Loading...</p>}
        {status === "error" && <p>Error: {errorMssg} </p>}
        {status === "success" && (
          <div>
            <p>Temp: {weather.current.temp_c}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Weather;
