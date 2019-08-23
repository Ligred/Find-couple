import { Component, OnInit } from '@angular/core';
import { Age } from '../../shared/age';
import { GameService } from '../../game.service';
import { GameSettings } from '../../shared/gameSettings';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-age',
  templateUrl: './game-age.component.html',
  styleUrls: ['./game-age.component.scss']
})
export class GameAgeComponent implements OnInit {
  private ages: Age[];
  private loading = false;
  constructor(private gameService: GameService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.gameService.settingsObservable.next(new GameSettings());
    this.getAge();
  }
  private onPickAge(age: Age): void {
    this.gameService.settingsObservable.next(new GameSettings(age.age, age.difficulty));
    this.router.navigate(['../theme'], {relativeTo: this.route});
  }
  private getAge(): void {
    this.loading = true;
    this.gameService.getAges().subscribe(data => {
      this.ages = data;
      this.loading = false;
    });
  }
}
