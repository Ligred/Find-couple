import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Subscription } from 'rxjs';
import { GameSettings } from '../shared/gameSettings';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  public gameSettings: GameSettings;
  private settingSubscribe: Subscription;
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.settingSubscribe = this.gameService.settingsObservable.subscribe(value => this.gameSettings = value);
  }
  ngOnDestroy(): void {
    this.settingSubscribe.unsubscribe();
  }

}
