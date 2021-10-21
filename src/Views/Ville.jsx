import React from "react";
import { useHistory, useParams } from "react-router-dom";
import CardElement from "../Components/Cards/CardElement";
import axios from "axios";

export default function Ville() {
  let { ville } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [targetVille, setTargetVille] = React.useState();

  React.useEffect(() => {
    axios({
      method: "GET",
      url:
        "http://api.weatherapi.com/v1/forecast.json?key=9ff27ccc57204468993172632211910&q=" +
        ville +
        "&days=5",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      setTargetVille(res.data);
      setLoading(false);
    })

  }, [targetVille, loading]);

  return (
    <div>
      <h1>{ville}</h1>
        {loading
          ?<CardElement>Loading ...</CardElement>
          : <div className="containerCity">
            {targetVille.forecast.forecastday.map((value, i) => {
                return <CardElement
                key={i}
                tempMoy={value.day.avgtemp_c}
                maxTemp={value.day.maxtemp_c}
                minTemp={value.day.mintemp_c}
                date={value.date}
                value={value}
                image={value.day.condition.icon}
              ></CardElement>
              })
          }
            </div>}
    </div>
  );
}
