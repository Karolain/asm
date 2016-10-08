import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../auth';

@Component({
  selector: 'top-menu',
  template: require('./menu.template.html'),
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  constructor(userService: UserService, router: Router) {
    this.userService = userService;
    this._router = router;
  }

  getLoggedIn() {
    return this.userService.getLoggedIn();
  }

  logout() {
    this.userService.logout();
    this._router.navigate(['']);
    return false;
  }
}
