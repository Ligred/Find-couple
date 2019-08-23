import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { Card } from './shared/card';
import { Age } from './shared/age';
import { GameSettings } from './shared/gameSettings';
import { Theme } from './shared/theme';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public resetObservable = new Subject<void>();
  public settingsObservable = new BehaviorSubject(new GameSettings());
  constructor(private http: HttpClient) { }
  public getCards(): Observable<Card[]> {
    return this.http.get<Card[]>('https://find-couple.firebaseio.com/cards.json')
      .pipe(map(data => {
      return  data.map(card => new Card(card.id, card.theme, card.name));
    }));
  }
  public getAges(): Observable<Age[]> {
    return this.http.get<Age[]>('https://find-couple.firebaseio.com/ages.json');
  }
  public getThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>('https://find-couple.firebaseio.com/themes.json')
      .pipe(map(data => {
        return data.map(theme => new Theme(theme.id, theme.name, theme.description));
      }));
  }
}
