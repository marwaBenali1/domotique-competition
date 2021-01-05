const SerialPort = require("serialport");
const { contextBridge } = require("electron");

let portName = "COM7";
let port = new SerialPort(portName, {
  baudRate: 9600,
  autoOpen: false,
});

const Readline = SerialPort.parsers.Readline;
const parser = new Readline({ delimiter: '\r' });
port.pipe(parser);

contextBridge.exposeInMainWorld(
    "SerialAPI", {
        open: (callback) => {
            port.on('open', function() {
                callback();
            });
        },
        open2: (callback) => {
            if(port.isOpen) {
                return ;
            }

            port.open((err) => {
                callback(err);
            });
        },
        close: (callback) => {
            if(port.isOpen) {
                port.close((err) => {
                    callback(err);
                });
            }
        },
        send: (message) => {
            port.write( message + " \r");
        },
        read: (callback) => {
            // removing the last two char 
            // then passing data to callback
            parser.on('data', (data) => callback(data.slice(0, data.length - 1)));
        },
        isOpen: () => {
            alert(port.isOpen);
        },
        availablePorts: (callback) => {
            let portList = [];

            SerialPort.list()
                .then((ports) => {
                    ports.forEach(({ path }) => {
                        portList.push(path);
                    });
                })
                .then(() => {
                    callback(portList);
                })

            return portList;
        },
        changePortName: (newPortName) => {
            const callback = () => {
                port = new SerialPort(newPortName, {
                    baudRate: 9600,
                    autoOpen: false
                });

                port.pipe(parser);
            }

            if(port.isOpen) {
                port.close(() => {
                    callback();
                });
            }
            else {
                callback();
            }
        },
    }
);