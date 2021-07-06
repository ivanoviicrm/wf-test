import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, first, switchMap } from 'rxjs/operators';
import {
  TOKEN_DATA,
  API_URL,
  TOKEN_SCOPE_TYPES,
  TOKEN_GRANT_TYPES,
  QUOTES_DATA,
} from '../common/constants';
import {
  FIELDS_NAMES,
  IQuote,
  IQuotesResponse,
  ITokenResponse,
} from '../common/models';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private _httpClient: HttpClient) {}

  // Public

  getToken(): Observable<ITokenResponse | Error> {
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

    return this._httpClient.post<any>(url, null, options).pipe(
      first(),
      catchError((error) => of(error))
    );
  }

  getMarketData(): Observable<any> {
    const url = `${API_URL}${QUOTES_DATA.micro}`;

    return this.getToken().pipe(
      first(),
      catchError((error) => of(error)),
      switchMap((response: ITokenResponse) => {
        const token = response.access_token;
        const options = {
          params: { fields: QUOTES_DATA.fields },
          headers: {
            Accept: 'application/vnd.solid-v1.0+json',
            'Accept-Encoding': 'gzip, deflate',
            Authorization: `Bearer ${token}`,
          },
        };
        return this._httpClient.get<any>(url, options).pipe(
          first(),
          catchError((error) => of(error)),
          switchMap((response: IQuotesResponse) => {
            const quotes = response.quotes;
            return of(this._mapQuotes(quotes));
          })
        );
      })
    );
  }

  // Private

  _mapQuotes(quotes: IQuote[]): any {
    return (quotes || []).map((quote) => {
      const fields = quote.fields;

      return Object.keys(fields).map((field: string) => {
        return {
          name: FIELDS_NAMES[field],
          valueV: fields[field].v,
          valueD: fields[field].d,
        };
      });
    });
  }
}
