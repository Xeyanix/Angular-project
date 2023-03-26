import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { snake } from './definition';

@Injectable({
  providedIn: 'root',
})
export class SnakeService {
  constructor(private _http: HttpClient) {}

  load() {
    const URL = 'http://scores.chrum.it/snake';
    return this._http.get<Array<snake>>(URL, {
      headers: {
        Accept: 'application/json',
      }
    });
  }

}
