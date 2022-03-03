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