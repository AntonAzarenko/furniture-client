export class HandleCreate {
  public id: number;
  public fileName: string;
  
  public gold: boolean;
  public chrome_bright: boolean;
  public chrome_matt: boolean;
  public satin: boolean;
  public other: string;

  public ninetySix: boolean;
  public oneHundredTwentyEight: boolean;
  public oneHundredNinetyTwo: boolean;
  public twoHundredFiftySix: boolean;
  public otherCenter: number;
  public article: string;

  public  priceNinetySix: string;
  public  priceOneHundredTwentyEight: string;
  public  priceOneHundredNinetyTwo: string;
  public  priceTwoHundredFiftySix: string;
  public  priceOtherCenter: string;

  public country: string;

  constructor(fileName: string, gold: boolean, chrome_bright: boolean, chrome_matt: boolean,
              satin: boolean, other: string, nintysix: boolean, oneHundredTwentyEight: boolean,
              oneHundrednintyTwo: boolean, twoHundredFivtySix: boolean, otherCenter: number, article: string,
              priceNinetySix: string,priceOneHundredTwentyEight: string,priceOneHundredNinetyTwo: string,priceTwoHundredFiftySix: string,priceOtherCenter: string, country: string) {
    this.fileName = fileName;
    this.gold = gold;
    this.chrome_bright = chrome_bright;
    this.chrome_matt = chrome_matt;
    this.satin = satin;
    this.other = other;
    this.ninetySix = nintysix;
    this.oneHundredTwentyEight = oneHundredTwentyEight;
    this.oneHundredNinetyTwo = oneHundrednintyTwo;
    this.twoHundredFiftySix = twoHundredFivtySix;
    this.otherCenter = otherCenter;
    this.article = article;
    this.priceNinetySix = priceNinetySix;
    this.priceOneHundredTwentyEight = priceOneHundredTwentyEight;
    this.priceOneHundredNinetyTwo = priceOneHundredNinetyTwo;
    this.priceTwoHundredFiftySix = priceTwoHundredFiftySix;
    this.priceOtherCenter = priceOtherCenter;
    this.country = country;
  }
}
