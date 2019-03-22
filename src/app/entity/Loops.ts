export class Loops{
  public id: string;
  public manufacturerName: string;
  public country: string;
  public type: string;
  public fileName: string;
  public angle: string;
  public microLift: boolean;
  public price: string;
  constructor(id: string, name: string, country: string, type: string, fileName: string, angle: string, microLift: boolean, price: string){
      this.id = id;
      this.manufacturerName = name;
      this.country = country;
      this.type = type;
      this.angle = angle;
      this.microLift = microLift;
      this.price = price;
      this.fileName = fileName;
  }
}