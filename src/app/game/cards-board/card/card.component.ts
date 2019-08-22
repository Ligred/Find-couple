import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { Card } from '../../../shared/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
  private clicked: boolean;
  @Input() card: Card;
  @Input() coupleCards: Card[];
  @Input() activeCards: Card[];
  @Output() clickCard = new EventEmitter<Card>();
  constructor() { }

  ngOnInit() {
    this.clicked = false;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (![...this.coupleCards, ...this.activeCards].find(i => i.id === this.card.id)) {
      this.clicked = false;
    }
  }
  onClick() {
    this.clickCard.emit(this.card);
    if (this.coupleCards.length === 2) {
      return false;
    }
    this.clicked = true;
  }
}
