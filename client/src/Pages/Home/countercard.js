import React from "react";
import "./countercard.css";
import CountUp from 'react-countup'
import { Card, CardText, CardBody, CardTitle, CardFooter } from "reactstrap";

export default function CounterCards() {
  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        gap: "5rem",
        marginTop: "30%",
        marginLeft: "10%"
      }}
    >
      <div class="col-4">
        <Card className="cardCounter">
          <CardBody>
            <CardText className="textCard">Projects Done</CardText>
            <div style={{ fontSize: "50px", color: "white" }}>
              <CountUp start={0} end={520} duration={5} />+
            </div>
          </CardBody>
        </Card>
      </div>

      <div class="col-4">
        <Card className="cardCounter">
        <CardText className="textCard">Workers Associated</CardText>
          <CardBody>
            
            <div style={{ fontSize: "50px", color: "white" }}>
              <CountUp start={0} end={600} duration={5} />+
            </div>
          </CardBody>
        </Card>
      </div>
      <div class="col-4">
        <Card className="cardCounter">
          <CardBody>
            <CardText className="textCard">Project Done</CardText>
            <div style={{ fontSize: "50px", color: "white", textAlign: "center"}}>
              <CountUp start={0} end={800} duration={5} />+{" "}
            </div>
          </CardBody>
        </Card>
      </div>
      <div class="col-4">
        <Card className="cardCounter">
          <CardBody>
            <CardText className="textCard">Smiles Spread</CardText>
            <div style={{ fontSize: "50px", color: "white" }}>
              <CountUp start={0} end={700} duration={6} />+{" "}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
