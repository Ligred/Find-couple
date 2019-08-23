import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameHeaderComponent } from './game/game-header/game-header.component';
import { CardsBoardComponent } from './game/cards-board/cards-board.component';
import { CardComponent } from './game/cards-board/card/card.component';
import { GameComponent } from './game/game.component';
import { GameAgeComponent } from './game/game-age/game-age.component';
import { GameThemeComponent } from './game/game-theme/game-theme.component';
import { HoverColorsDirective } from './shared/hover-colors.directive';
import { ThemeFilterPipe } from './shared/theme-filter.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SpinerComponent } from './shared/spiner/spiner.component';

@NgModule({
  declarations: [
    AppComponent,
    GameHeaderComponent,
    CardsBoardComponent,
    CardComponent,
    GameComponent,
    GameAgeComponent,
    GameThemeComponent,
    HoverColorsDirective,
    ThemeFilterPipe,
    SpinerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
