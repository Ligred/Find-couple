import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameThemeComponent } from './game-theme.component';

describe('GameThemeComponent', () => {
  let component: GameThemeComponent;
  let fixture: ComponentFixture<GameThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
