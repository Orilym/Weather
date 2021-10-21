import React from "react";
import CityCards from "../Components/Cards/CityCards";

export default function Home() {
  const [geo, setGeo] = React.useState();
  const [ville, setVille] = React.useState([]);
  const defaultVile = ["Paris","London","Toronto","New York","Los Angeles","San Francisco"]

  React.useEffect(() => {
    const geoloc = () => {
      setGeo(
        navigator.geolocation.getCurrentPosition((position) => {
          setVille([...defaultVile,`${position.coords.latitude},${position.coords.longitude}`])
        })
      );
    };
    geoloc();
  }, [ville]);

  return  <div className="containerCity">      
            {ville.map((value, index) => {
              return <CityCards key={index} value={value}></CityCards>;
              })
            }
          </div>;
}
