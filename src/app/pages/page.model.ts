export class Page {
  public name: string;
  public url: string;
  public imagePath: string;  

  constructor(name: string, url: string, imagePath: string) {
    this.name = name;
    this.url = url;
    this.imagePath = imagePath;    
  }
}
