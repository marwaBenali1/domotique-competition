import React, { useState, useEffect } from 'react';
import { Button, FormControl, Row, Col, ListGroup} from "react-bootstrap";

import Chart from "chart.js";
import SendIcon from '@material-ui/icons/Send';


export function ChartComponent(props) {
    const containerId = "static-container-chart-component";
    const height = props.height;
    const width = props.width;
    const chartProps = props.chartProps;
  
    const chartId = props.id;
  
    const mountingFunction = () => {
      const containerElement = document.getElementById(containerId);
      containerElement.innerHTML = `<canvas id=${chartId} width=${width} height=${height}></canvas>`;
  
      window.MyChart = new Chart(chartId, chartProps);
    }
  
    useEffect(() => {
      mountingFunction();
  
      return () => {
        const chartElement = document.getElementById(chartId);
  
        if(chartElement) {
          chartElement.remove();
        }
      }
    }, [chartProps])
  
    return <div id={containerId}></div>
  }
  
 
export function SerialComponent(props) {
    const [receivedMessage, setReceivedMessage] = useState("Nothing received!");
    const [messageToSend, setMessageToSend] = useState("");
  
    useEffect(() => {
      window.SerialAPI.read((data) => {
        setReceivedMessage(data);
      })
    }, []);
  
    return (
      <div>
        <Row className="mb-3">
            <Col xs={8}>
              <FormControl 
                type="text"
                value={messageToSend}
                onChange={({ target }) => setMessageToSend(target.value)} 
                />
            </Col>
            <Col xs={2}>
              <Button 
                onClick={() => {window.SerialAPI.send(messageToSend);}} 
                variant="info"
                >
                  Send <SendIcon fontSize="small" />
              </Button>
            </Col>
        </Row>
  
        <h4>{"Received message: "}{receivedMessage}</h4>
      </div>
    );
  }
  

  export function AvailablePortsComponent(props) {
    const [arrPorts, setArrPorts] = useState(['test']);
  
    return(
      <Row>
        <Col>
          <Button onClick={() => window.SerialAPI.availablePorts(setArrPorts)}>Refresh</Button>
          <Button variant="warning" onClick={() => window.SerialAPI.changePortName("COM5")}>Change port</Button>
  
          <ListGroup>
            {arrPorts.map((portName, i) =>
              <ListGroup.Item key={`portname-${i}`}>{portName}</ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    );
  }