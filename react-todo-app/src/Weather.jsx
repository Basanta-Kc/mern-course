import "./App.css";
import { useState, useEffect } from "react";

export function useQuery(dependencyList, apiCall) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle");
  const [errorMssg, setErrorMssg] = useState(""); // useState({data: null, status: idle, errorMssg: null})
  useEffect(() => {
    if(dependencyList[0]?.length === 0) return ;
    setStatus("loading");
    fetch(apiCall)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log({ data });
        if (data.error) {
          throw new Error(data.error.message);
        }
        setData(data);
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
        setErrorMssg(error.message);
      });
  }, dependencyList);

  return { data, errorMssg, status };
}

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
