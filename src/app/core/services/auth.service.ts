import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user: User = {id: '1', username: 'omergamliel3'};

    async login(username: string, password: string): Promise<void> {
        console.log('login');
    }

    async logout(username: string, password: string): Promise<void> {
        console.log('logout');
    }

    get isUserLogged(): boolean {
        return !!this.user;
    }
}
