export class GameSettings {

  constructor(public age: string = '',
              public difficulty: number = 4,
              public themeDescription: string = '',
              public themeName: string = '',
              public isGameBoard: boolean = false) {}
}
