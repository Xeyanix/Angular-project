import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './definition';

@Injectable({
  providedIn: 'root',
})
export class SnakeService {
  constructor(private _http: HttpClient) {}

  load() {
    const URL = 'https://edu.chrum.it/data/products.json';
    return this._http.get<Array<Category>>(URL);
  }
}
