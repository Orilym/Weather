import React from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

export default function Cards(props) {
  const [meteoVille, setMeteoVille] = React.useState();
  const [loading, setLoading] = React.useState(true);
  let history = useHistory();


  React.useEffect(() => {
    axios({
      method: "GET",
      url:
        "http://api.weatherapi.com/v1/forecast.json?key=9ff27ccc57204468993172632211910&q=" +
        props.value +
        "&days=5&aqi=no&alerts=no",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        setMeteoVille(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });


  }, [loading, meteoVille]);

  return <div>{
              loading 
              ? <Card style={{ width: "18rem", margin: "15px" }}><Card.Body>Loading...</Card.Body></Card>
              :<Card style={{ width: "18rem", margin: "15px" }}>
                <div style={{ width: "100%" }}>
                  <Card.Img
                    style={{ width: "5rem", padding: "25px 0" }}
                    variant="top"
                    src={meteoVille.current.condition.icon}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{meteoVille.location.name}</Card.Title>
                  <Card.Text>
                    La température est de : {meteoVille.current.temp_c} °C. <br />
                    Derniere mise à jour à : {meteoVille.current.last_updated}
                  </Card.Text>

                  <Button
                    style={{ backgroundColor: "#226886" }}
                    onClick={() =>
                      history.replace("/ville/" + meteoVille.location.name)
                    }
                    variant="primary"
                  >
                    Prévision sur 5 jours
                        </Button>
                </Card.Body>
              </Card>}
          </div>
  
}
