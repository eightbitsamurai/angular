import { Injectable, inject } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  userService = inject(UserService);
  router = inject(Router);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.userService.currentUser$.subscribe();
    const s = JSON.parse(localStorage.getItem('user') || '').payload;
    console.log("ghbdtn")
    if (user) {
        return true;
    }

    this.router.navigate(['/template'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}