import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Card } from './shared/card';
import { Age } from './shared/age';
import { GameSettings } from './shared/gameSettings';
import { Theme } from './shared/theme';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public cardClickObservable = new Subject<{id: number, clicked: boolean}>();
  public resetObservable = new Subject<void>();
  public settingsObservable = new BehaviorSubject(new GameSettings());
  private  themes = {
    fruit: {
      name: 'fruit',
      image: '../assets/images/theme-images/fruit.png',
      bgImage: '../assets/images/theme-images/fruit-background.jpg',
      description: 'Фрукти'
    },
  };
  private cards = [
    {
      id: 1,
      theme: this.themes.fruit,
      name: 'apple',
      image: '../assets/images/fruit/apple.png'
    },
    {
      id: 2,
      theme: this.themes.fruit,
      name: 'avocado',
      image: '../assets/images/fruit/avocado.png'
    },
    {
      id: 3,
      theme: this.themes.fruit,
      name: 'banana',
      image: '../assets/images/fruit/banana.png'
    },
    {
      id: 4,
      theme: this.themes.fruit,
      name: 'blueberries',
      image: '../assets/images/fruit/blueberries.png'
    },
    {
      id: 5,
      theme: this.themes.fruit,
      name: 'lemon',
      image: '../assets/images/fruit/lemon.png'
    },
    {
      id: 6,
      theme: this.themes.fruit,
      name: 'pear',
      image: '../assets/images/fruit/pear.png'
    },
    {
      id: 7,
      theme: this.themes.fruit,
      name: 'pineapple',
      image: '../assets/images/fruit/pineapple.png'
    },
    {
      id: 8,
      theme: this.themes.fruit,
      name: 'raspberry',
      image: '../assets/images/fruit/raspberry.png'
    }
  ];
  private ages = [
    {
      age: '3-4 років',
      color: '#ff2480',
      difficulty: 4
    },
    {
      age: '4-5 років',
      color: '#ff9d2a',
      difficulty: 6
    },
    {
      age: '5-6 років',
      color: '#00d36f',
      difficulty: 8
    },
  ];
  constructor() { }
  public getCards(): Card[] {
    return [...this.cards];
  }
  public getAges(): Age[] {
    return [...this.ages];
  }
  public getThemes(): Theme[] {
    const keys = Object.keys(this.themes);
    const arr = [];
    keys.forEach( i => arr.push({...this.themes[i]}));
    return arr;
  }
}
