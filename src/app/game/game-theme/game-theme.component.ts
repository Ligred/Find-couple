import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameService } from '../../game.service';
import { Theme } from '../../shared/theme';
import { GameSettings } from '../../shared/gameSettings';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-theme',
  templateUrl: './game-theme.component.html',
  styleUrls: ['./game-theme.component.scss']
})
export class GameThemeComponent implements OnInit, OnDestroy {
  private themes: Theme[];
  private settings: GameSettings;
  private settingSubscription: Subscription;
  private searchQuery: string;
  constructor(private gameService: GameService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.themes = this.gameService.getThemes();
    this.settingSubscription = this.gameService.settingsObservable.subscribe(value => this.settings = value);
  }
  ngOnDestroy(): void {
    this.settingSubscription.unsubscribe();
  }

  onChoseTheme(theme: Theme) {
    this.gameService.settingsObservable.next(new GameSettings(this.settings.age, this.settings.difficulty, theme.description));
    this.router.navigate(['../board'], {relativeTo: this.route});
  }
}
