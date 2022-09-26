import React from "react";
import "./countercard.css";
import CountUp from 'react-countup'
import { Card, CardText, CardBody, CardTitle, CardFooter } from "reactstrap";

export default function CounterCards() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: '100px 100px 0',
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
          <CardBody>
            <CardText className="textCard">Workers Associated</CardText>
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
            <div style={{ fontSize: "50px", color: "white" }}>
              <CountUp start={0} end={800} duration={5} /> +{" "}
            </div>
          </CardBody>
        </Card>
      </div>
      <div class="col-4">
        <Card className="cardCounter">
          <CardBody>
            <CardText className="textCard">Smiles</CardText>
            <div style={{ fontSize: "50px", color: "white" }}>
              <CountUp start={0} end={700} duration={6} />+{" "}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
