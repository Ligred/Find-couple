export  class Theme {

  constructor(public  id: number,
              public name: string,
              public description: string) {}
  get image() {
    return `../assets/images/theme-images/${this.name}.png`;
  }
  get bgImage() {
    return `../assets/images/theme-images/${this.name}-background.jpg`;
  }
}
