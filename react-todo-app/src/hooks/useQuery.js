import { useReducer, useEffect } from "react";

const initialState = {
  data: null,
  status: "loading",
  errorMssg: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { data: null, errorMssg: null, status: "loading" };
    case "SUCCESS":
      return { data: action.payload, errorMssg: null, status: "success" };
    case "ERROR":
      return { data: null, errorMssg: action.errorMssg, status: "error" };
  }
}

export function useQuery(dependencyList, apiCall) {
  const [state, dispatch] = useReducer(reducer, initialState);
  //   const [data, setData] = useState(null);
  //   const [status, setStatus] = useState("idle");
  //   const [errorMssg, setErrorMssg] = useState(""); // useState({data: null, status: idle, errorMssg: null})
  useEffect(() => {
    if (dependencyList[0]?.length === 0) return;
    // setStatus("loading");
    dispatch({ type: "LOADING" });
    fetch(apiCall)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log({ data });
        if (data.error) {
          throw new Error(data.error.message);
        }
        // setData(data);
        // setStatus("success");
        dispatch({ type: "SUCCESS", payload: data });
      })
      .catch((error) => {
        // setStatus("error");
        // setErrorMssg(error.message);
        dispatch({ type: "ERROR", errorMssg: error.message });
      });
  }, dependencyList);

  // return { data, errorMssg, status}
  return state;
}
