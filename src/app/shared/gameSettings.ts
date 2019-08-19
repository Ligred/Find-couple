export class GameSettings {
  age: string;
  difficulty: number;
  theme: string;
  isGameBoard: boolean;
  constructor(age: string = '', difficulty: number = 4, theme: string = '', isGameBoard: boolean = false) {
    this.age = age;
    this.difficulty = difficulty;
    this.theme = theme;
    this.isGameBoard = isGameBoard;
  }
}
