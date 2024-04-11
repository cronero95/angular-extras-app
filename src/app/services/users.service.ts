import { Injectable, signal } from '@angular/core';
import { User } from '../interfaces/request-response.interface';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  #state = signal<State>({
    users: [],
    loading: true,
  });

  constructor() { }
}
