import React, { useState, useEffect } from 'react';
import { Button, Dropdown, FormControl, Row, Col, ListGroup, Badge,Card,Image, Navbar, img, width} from "react-bootstrap";


import Chart from "chart.js";
import SendIcon from '@material-ui/icons/Send';


export default function App() {
  const [count, setCount] = useState(0);
  const [receivedMessage, setReceivedMessage] = useState("Nothing received!");
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    window.SerialAPI.read((data) => {
      if(data !== "badr") {
        setReceivedMessage(data);
        return ;
      }

      setReceivedMessage("badr was sent as message");
    })
  }, []);

  const chartProps = {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# colors',
                data: [12, 19, 3, 5, count, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }

  return (
    <div>
      <div class="container ">
        
        <h1 class="mb-0 text-white" > Moby D.I.C SmartHouse 
     
        <div class="float-right">
          <h5 class="mb-0 p-3">Friday 14 May 2021</h5>
        </div>
 
        </h1>
        <Dropdown.Divider/> 
      </div>    
        <div class="row p-5 m-5 justify-content-center">
          <div class="col-3  " style={{ opacity:0.4 }}>
          <div class="card" >
            <div class=" p-1 align-self-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-speedometer2" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
              </svg>
            </div>
            <div class="card-body border-light">
               <p class="card-text text-center">Dashboard</p>
            </div>
          </div>
          </div>
          <div class="col-3 justify-item-center  " style={{ opacity:0.4 }}>
          <div class="card">
              <div class="p-2 align-self-center">
              <svg xmlns="http://www.w3.org/2000/svg"  class='color: red;' width="90" height="90" fill="white" class="bi bi-shield-lock" viewBox="0 0 16 16">
                <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z"/>
              </svg> 

              <div class="card-body border-light">
                <p class="card-text text-center" >
                  Security</p>
              </div>
            </div>
          </div>
          </div>
          <div class="col-3 "style={{  opacity:0.4 }}>
            <div class="card" >
              <div class="p-2 align-self-center">
                <svg style="color:blue" xmlns="http://www.w3.org/2000/svg" class=' fill-curent danger' width="90" height="90" fill="" class="bi bi-lightbulb" viewBox="0 0 16 16">
                  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
                </svg>
                <div class="card-body border-light">
                  <p class="card-text text-center">Dashboard</p>
                </div>
              </div>
          </div> 
        </div>
      </div>
      <Button variant="outline-light">Light</Button>{' '}
      <Button variant="outline-secondary">Secondary</Button>{' '}
      {/*<Navbar>
        <Navbar.Brand href="#home" color="white">Moby D.I.C SmartHouse</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>*/}
   
      {/*<h1>
        welcome 
        <Badge className="ml-5" variant="secondary">{(isConnected) ? "connected" : "disconnected"}</Badge>
      </h1>}
      {/*<Button onClick={() => window.SerialAPI.open2(() => setIsConnected(true))}>Connect</Button>
      <Button variant="danger" onClick={() => window.SerialAPI.close(() => setIsConnected(false))}>Disconnect</Button>

      <Dropdown.Divider />

      <AvailablePortsComponent />

      <SerialComponent />

      <Dropdown.Divider className="mt-5"/>
      
      <Button 
        onClick={() => setCount(count + 1)}
        >
          Increse Purple
      </Button>
      <ChartComponent id="123abc" height="100" chartProps={chartProps}/> */}
    </div>
  )
}


function ChartComponent(props) {
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


function SerialComponent(props) {
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