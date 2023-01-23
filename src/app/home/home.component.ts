import { Component } from '@angular/core';
import { User } from '@app/models';
import { AccountService } from '@app/services';

@Component({ templateUrl: 'home.component.html',
  styles: ['container { text-align: center; }']})
export class HomeComponent {
    user: User | null;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }
}
