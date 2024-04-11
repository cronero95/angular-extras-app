import { Component, inject } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './users-page.component.html',
  styles: ``
})
export default class UsersPageComponent {

  public usersService = inject(UsersService);

}
