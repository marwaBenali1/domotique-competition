const SerialPort = require("serialport");
const { contextBridge } = require("electron");

const portName = "COM5";
const port = new SerialPort(portName, {
  baudRate: 9600
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
        }
    }
);