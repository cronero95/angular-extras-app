import { Injectable, computed, inject, signal } from '@angular/core';
import { User, UserResponse } from '../interfaces/request-response.interface';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  #httpClient = inject(HttpClient);

  #state = signal<State>({
    users: [],
    loading: true,
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    this.#httpClient.get<UserResponse>('https://reqres.in/api/users')
      .pipe(
        delay(2000),
      )
      .subscribe(resp => {
        this.#state.set({
          users: resp.data,
          loading: false,
        });
      })
  }
}
