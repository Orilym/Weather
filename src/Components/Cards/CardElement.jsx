import React from "react";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";

export default function CardElement(props) {
  let history = useHistory();

  return (
    <div>
      <Card style={{ width: "18rem", margin: "15px" }}>
        <div style={{ width: "100%" }}>
          <Card.Img
            style={{ width: "5rem", padding: "25px 0" }}
            variant="top"
            src={props.image}
          />
        </div>
        <Card.Body>
          <Card.Title>{props.date}</Card.Title>
          <Card.Text>
            
            <br />
            La température moyenne estimée de : {props.tempMoy} °C. <br />
            Minimum : {props.minTemp} °C - Maximum : {props.maxTemp}°C. <br />
          </Card.Text>

          
        </Card.Body>
      </Card>
    </div>
  );
}
