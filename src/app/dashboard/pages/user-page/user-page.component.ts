import { Component, computed, inject } from '@angular/core';
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

  public user = toSignal(
    this.#activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.#usersService.getUserById(id)),
      )
  );

  public titleLabel = computed(() => {
    if(!this.user()) return 'User information';

    return `${this.user()!.first_name} ${this.user()!.last_name}`;
  })

  constructor(){
    this.#activatedRoute.params
      .subscribe(params => {
        console.log({params});

      })
  }

}
