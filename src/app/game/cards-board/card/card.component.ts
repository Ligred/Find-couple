import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Card } from '../../../shared/card';
import { GameService } from '../../../game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {
  private clicked: boolean;
  private  cardClickSubscription: Subscription;
  @Input() card: Card;
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.clicked = false;
    this.cardClickSubscription = this.gameService.cardClickObservable.subscribe((data) => {
      this.clicked = data.id === this.card.id ? data.clicked : this.clicked;
    });
  }
  ngOnDestroy(): void {
    this.cardClickSubscription.unsubscribe();
  }
}
