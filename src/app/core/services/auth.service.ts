import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user: { id?: number, username: string } = {id: 1, username: 'omergamliel3'};

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
