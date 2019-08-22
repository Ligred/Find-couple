import { Component, OnDestroy, OnInit } from '@angular/core';
import { Card } from '../../shared/card';
import { GameService } from '../../game.service';
import { Subscription } from 'rxjs';
import { GameSettings } from '../../shared/gameSettings';

@Component({
  selector: 'app-cards-board',
  templateUrl: './cards-board.component.html',
  styleUrls: ['./cards-board.component.scss']
})
export class CardsBoardComponent implements OnInit, OnDestroy {

  private cards: Card[] = [];
  private sortedCards: Card[] = [];
  private activeCards: Card[] = [];
  private coupleCards: Card[] = [];
  private winMode = false;
  private settings: GameSettings;
  private subscriptions: Subscription[] = [];
  constructor(private gameService: GameService) { }

  ngOnInit() {
    const settingSubscription = this.gameService.settingsObservable.subscribe(value => this.settings = value);
    this.subscriptions.push(settingSubscription);
    this.gameService.settingsObservable
      .next(new GameSettings(this.settings.age, this.settings.difficulty, this.settings.theme, true));
    this.getCards();
    this.randomSort();
    const resetSubscription = this.gameService.resetObservable.subscribe(() => {
      this.activeCards = [];
      this.coupleCards = [];
      this.getCards();
      this.winMode = false;
    });
    this.subscriptions.push(resetSubscription);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  private getCards(): void {
    this.cards = this.gameService.getCards();
  }
  private duplicate(cards: Card[]): Card[] {
    return [].concat(cards, cards).map((el, i) => {
      const card = {...el};
      card.id = i + 1;
      return card;
    });
  }
  private randomSort(): void {
    const filteredCards = this.getFilteredCards(this.cards);
    const duplicatedCards = this.duplicate(filteredCards);
    this.sortedCards = duplicatedCards.sort(() => {
      return Math.random() * 2 - 1;
    });
  }
  private getFilteredCards(cards: Card[]): Card[] {
    return cards.filter((card: Card) => {
      return card.theme.description === this.settings.theme;
    }).slice(0, this.settings.difficulty);
  }
  private onClickCard(card: Card): void | boolean {
    if (!this.coupleCards.length || this.coupleCards[0].id !== card.id) {
      this.coupleCards = [...this.coupleCards, card];
    }
    this.checkCards();
    if (this.activeCards.length === this.sortedCards.length) {
      setTimeout(() => {
        this.winMode = true;
      }, 700);
    }
  }
  private checkCards(): void {
    if (this.coupleCards.length === 2 && this.coupleCards[0].name === this.coupleCards[1].name) {
      this.activeCards = [...this.activeCards, ...this.coupleCards];
      this.coupleCards = [];
    } else if (this.coupleCards.length === 2 && this.coupleCards[0].name !== this.coupleCards[1].name) {
      setTimeout(() => this.coupleCards = [], 1000);
    }
  }
}
