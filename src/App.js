import React, { useState, useEffect } from "react";
import axios from "axios";
import Temoapp from "./components/Temoapp";

const App = () => {
  return (
    <div>
      <Temoapp />
    </div>
  );
  // const [user, setUser] = useState([]);

  // const url = "http://dataservice.accuweather.com/currentconditions/v1/1711155";

  // const api_key = "2m8Ua8wfFHvfhn4SndqEt9llgb2cgmMY";

  // useEffect(() => {
  //   axios.get(`${url}?apikey=${api_key}`).then((res) => {
  //     console.log("Data:", res.data);
  //     setUser(res.data);
  //   });
  // }, []);

  // return (
  //   <div>
  //     {user.map((n) => {
  //       const { WeatherText } = n;
  //       return <h1>weather:-{WeatherText}</h1>;
  //     })}
  //   </div>
  // );
};

export default App;
