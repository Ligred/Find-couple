export class Card {

  constructor(public id: number,
              public theme: string,
              public name: string) {}
  get image(): string {
    return `../assets/images/fruit/${this.name}.png`;
  }
}
