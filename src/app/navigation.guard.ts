import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GameService } from './game.service';
import { GameSettings } from './shared/gameSettings';

@Injectable({
  providedIn: 'root'
})
export class NavigationGuard implements CanActivate {
  private settings: GameSettings;
  private path: string;
  constructor(private gameService: GameService,
              private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.gameService.settingsObservable.subscribe(value => this.settings = value);
    this.path = route.routeConfig.path;
    if (this.settings.age && this.path === 'theme') {
      return true;
    } else if (this.settings.themeName && this.path === 'board') {
      return  true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
