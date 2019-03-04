export class HandleCreate {
  public file: File;
  public color: string;
  public betweenCenter: string;

  public gold: boolean;
  public chrome_bright: boolean;
  public chrome_matt: boolean;
  public satin: boolean;
  public other: boolean;

  public nintysix: boolean;
  public oneHundredTwentyEight: boolean;
  public oneHundrednintyTwo: boolean;
  public twoHundredFivtySix: boolean;
  public otherCenter: boolean;
  public article: string;

  constructor(file: File, color: string, betweenCenter: string, gold: boolean, chrome_bright: boolean, chrome_matt: boolean,
              satin: boolean, other: boolean, nintysix: boolean, oneHundredTwentyEight: boolean,
              oneHundrednintyTwo: boolean, twoHundredFivtySix: boolean, otherCenter: boolean, article: string) {
    this.file = file;
    this.color = color;
    this.betweenCenter = betweenCenter;
    this.gold = gold;
    this.chrome_bright = chrome_bright;
    this.chrome_matt = chrome_matt;
    this.satin = satin;
    this.other = other;
    this.nintysix = nintysix;
    this.oneHundredTwentyEight = oneHundredTwentyEight;
    this.oneHundrednintyTwo = oneHundrednintyTwo;
    this.twoHundredFivtySix = twoHundredFivtySix;
    this.otherCenter = otherCenter;
    this.article = article;
  }
}
