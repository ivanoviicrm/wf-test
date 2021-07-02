import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { TOKEN_DATA, TOKEN_MICRO } from './constants/constants';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private _httpClient: HttpClient) {}

  getToken(): Observable<any> {
    const options = {
      params: {
        grant_type: 'password',
        username: TOKEN_DATA.user.username,
        password: TOKEN_DATA.user.password,
        scope: 'uaa.user',
      },
      headers: {
        Authorization: 'Basic d2ViZmctdGVzdDpXVzU4WUpqODlsdFI0M0Ny',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    return this._httpClient.post(TOKEN_MICRO, null, options).pipe(first());
  }
}
