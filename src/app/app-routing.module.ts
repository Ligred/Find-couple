import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameAgeComponent } from './game/game-age/game-age.component';
import { GameThemeComponent } from './game/game-theme/game-theme.component';
import { CardsBoardComponent } from './game/cards-board/cards-board.component';
import { NavigationGuard } from './navigation.guard';

const routes: Routes = [
  {path: 'age', component: GameAgeComponent},
  {path: 'theme', component: GameThemeComponent, canActivate: [NavigationGuard]},
  {path: 'board', component: CardsBoardComponent, canActivate: [NavigationGuard]},
  {path: '', redirectTo: '/age', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
