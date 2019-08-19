import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAgeComponent } from './game-age.component';

describe('GameAgeComponent', () => {
  let component: GameAgeComponent;
  let fixture: ComponentFixture<GameAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
