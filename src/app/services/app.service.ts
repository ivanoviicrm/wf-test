import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, first } from 'rxjs/operators';
import {
  TOKEN_DATA,
  API_URL,
  TOKEN_SCOPE_TYPES,
  TOKEN_GRANT_TYPES,
} from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private _httpClient: HttpClient) {}

  getToken(): Observable<any> {
    const url = `${API_URL}${TOKEN_DATA.micro}`;
    const options = {
      params: {
        grant_type: TOKEN_GRANT_TYPES.PASSWORD,
        username: TOKEN_DATA.user.username,
        password: TOKEN_DATA.user.password,
        scope: TOKEN_SCOPE_TYPES.USER,
      },
      headers: {
        Authorization: 'Basic d2ViZmctdGVzdDpXVzU4WUpqODlsdFI0M0Ny',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    return this._httpClient.post(url, null, options).pipe(
      first(),
      catchError((error) => of(error))
    );
  }
}
