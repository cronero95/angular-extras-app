import { Component, inject } from '@angular/core';
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { UsersService } from '../../../services/users.service';
import { switchMap } from 'rxjs';

@Component({
  standalone: true,
  imports: [
    TitleComponent,
  ],
  templateUrl: './user-page.component.html',
  styles: ``
})
export default class UserPageComponent {

  #activatedRoute = inject(ActivatedRoute);
  #usersService = inject(UsersService);

  /* public user = signal<User | undefined>(undefined); */
  public user = toSignal(
    this.#activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.#usersService.getUserById(id)),
      )
  );

  constructor(){
    this.#activatedRoute.params
      .subscribe(params => {
        console.log({params});

      })
  }

}
