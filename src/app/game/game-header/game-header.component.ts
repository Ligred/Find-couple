import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameService } from '../../game.service';
import { Subscription } from 'rxjs';
import { GameSettings } from '../../shared/gameSettings';
import {Location} from '@angular/common';

@Component({
  selector: 'app-game-header',
  templateUrl: './game-header.component.html',
  styleUrls: ['./game-header.component.scss']
})
export class GameHeaderComponent implements OnInit, OnDestroy {
  private settings: GameSettings;
  private settingsSubscriber: Subscription;

  constructor(private gameService: GameService,
              private location: Location) { }

  ngOnInit() {
    this.settingsSubscriber = this.gameService.settingsObservable.subscribe(value => {
      this.settings = value;
    });
  }
  ngOnDestroy(): void {
    this.settingsSubscriber.unsubscribe();
  }

  onReset() {
    this.gameService.resetObservable.next();
  }
  backNav() {
    this.location.back();
  }

}
