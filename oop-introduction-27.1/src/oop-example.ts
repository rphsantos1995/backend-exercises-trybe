/** 
class TV {
  _brand: string;
  _size: number;
  _resolution: string;
  _connections: string;

  constructor(brand: string, size: number, 
    resolution: string, connections:string) {
    
    console.log(`Creating a new ${brand} TV`);

    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;

  }
  turnOn(){
    console.log(`The tv was initialized, 
with the following properties: brand:${this._brand}, 
size: ${this._size}, 
connections: ${this._connections}`);
  };
};

const newTv1 = new TV("samsung", 30, "full hd", "hdmi");

newTv1.turnOn();
*/

// -------------------------- // --------------------------

// Setting class TV to private 

class TV {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo: string;

  constructor(brand: string, size: number, 
    resolution: string, connections: string[], connectedTo: string) {
    
    console.log(`Creating a new ${brand} TV`);

    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
    this._connectedTo = connectedTo;

  }
  //getter (get info from private atribute)
  get connectedTo() {
    return this._connectedTo;
  }

  //setter (alter private atribute)
  set connectedTo(newDevice: string ) { 

    const findConnections = this._connections.filter(item => item === newDevice);

    if(findConnections.length > 0) {
      this._connectedTo = newDevice
      console.log(`currently connected to: ${this._connectedTo}`);
    };
    if(findConnections.length <= 0) console.log( `sorry, connection unavailable for: 
    ${newDevice} device`);
  }

  turnOn(){
    console.log(`The tv was initialized, with the following properties: 
    brand:${this._brand}, size: ${this._size}, connections: ${this._connections}`);
  };
};


const newTv1 = new TV("samsung", 30, "full hd", ["hdmi", "usb", "etc"], "hdmi");
newTv1.turnOn();

// changing private atribute
newTv1.connectedTo = "usb";

// getting from private
console.log(newTv1.connectedTo);


