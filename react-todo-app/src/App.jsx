import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [status, setStatus] = useState("idle");
  const [errorMssg, setErrorMssg] = useState(""); // useState({data: null, status: idle, errorMssg: null})
  useEffect(() => {
    // api call
    if (location.length === 0) return;
    setStatus("loading");
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=3c1465617acd467ca89113605241806&q=${location}`
    )
      .then((res) => {
        if (!res.ok) throw new Error("No matching location found.");
        return res.json();
      })
      .then((data) => {
        setWeather(data);
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
        setErrorMssg(error.message);
      });
  }, [location]);
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

export default App;

// 1. using local storage in todos app
// 2. useEffect (api call revise)
// 3. pokenmon app, different varaible for managing state
// 4. use state object.
