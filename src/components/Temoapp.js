import React, { useEffect, useState } from "react";
import "../css/style.css";
const Temoapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Imphal");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=09b59c981d2733132c2d1e4f19b8ba0c`;
      const response = await fetch(url);

      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="errorMsg">No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">{search}</h2>
              <h1 className="temp">{city.temp}</h1>
              <h3 className="tempmin_max ">
                {" "}
                Max:{city.temp_max}||Min{city.temp_min}
              </h3>
            </div>
            <div className="wave-one"></div>
            <div className="wave-two"></div>
            <div className="wave-three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Temoapp;
