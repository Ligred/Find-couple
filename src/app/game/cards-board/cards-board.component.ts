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

  private cards: Card[];
  private sortedCards: Card[];
  private activeCards: Card[];
  private coupleCards: Card[];
  private winMode: boolean;
  private resetSubscription: Subscription;
  private settings: GameSettings;
  private settingSubscription: Subscription;
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.settingSubscription = this.gameService.settingsObservable.subscribe(value => this.settings = value);
    this.gameService.settingsObservable
      .next(new GameSettings(this.settings.age, this.settings.difficulty, this.settings.theme, true));
    this.cards = this.gameService.getCards();
    this.sortedCards = this.randomSort(this.cards);
    this.activeCards = [];
    this.coupleCards = [];
    this.winMode = false;
    this.resetSubscription = this.gameService.resetObservable.subscribe(() => {
      this.flipCard(this.activeCards, false);
      this.flipCard(this.coupleCards, false);
      this.winMode = false;
    });
  }
  ngOnDestroy(): void {
    this.resetSubscription.unsubscribe();
    this.settingSubscription.unsubscribe();
  }

  private duplicate(cards: Card[]) {
    return [].concat(cards, cards).map((el, i) => {
      const card = {...el};
      card.id = i + 1;
      return card;
    });
  }
  private randomSort(cards: Card[]) {
    const filteredCards = this.getFilteredCards(cards);
    const duplicatedCards = this.duplicate(filteredCards);
    return duplicatedCards.sort(() => {
      return Math.random() * 2 - 1;
    });
  }
  private getFilteredCards(cards: Card[]) {
    return cards.filter((card: Card) => {
      return card.theme.description === this.settings.theme;
    }).slice(0, this.settings.difficulty);
  }
  private onClickCard(card: Card) {
    if (this.coupleCards.length === 2) {
      return false;
    }
    this.gameService.cardClickObservable.next({id: card.id, clicked: true});
    if (!this.coupleCards.length || this.coupleCards[0].id !== card.id) {
      this.coupleCards.push(card);
    }
    this.checkCards();
    if (this.activeCards.length === this.sortedCards.length) {
      setTimeout(() => {
        this.winMode = true;
      }, 700);
    }
  }
  private checkCards() {
    if (this.coupleCards.length === 2 && this.coupleCards[0].name === this.coupleCards[1].name) {
      this.activeCards = [...this.activeCards, ...this.coupleCards];
      this.coupleCards = [];
    } else if (this.coupleCards.length === 2 && this.coupleCards[0].name !== this.coupleCards[1].name) {
      setTimeout(() => {
        this.flipCard(this.coupleCards, false);
        this.coupleCards = [];
      }, 1000);
    }
  }
  private flipCard(array: Card[], clicked: boolean) {
    array.forEach(item => {
      this.gameService.cardClickObservable.next({id: item.id, clicked});
    });
  }

}
