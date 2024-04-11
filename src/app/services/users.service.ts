import { Injectable, computed, inject, signal } from '@angular/core';
import { User, UserResponse, UsersResponse } from '../interfaces/request-response.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, map } from 'rxjs';

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
    this.#httpClient.get<UsersResponse>('https://reqres.in/api/users')
      .pipe(
        delay(2000),
      )
      .subscribe(resp => {
        this.#state.set({
          users: resp.data,
          loading: false,
        });
      });
  }

  getUserById(id: string): Observable<User> {
    return this.#httpClient.get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(2000),
        map(resp => resp.data),
      );
  }
}
