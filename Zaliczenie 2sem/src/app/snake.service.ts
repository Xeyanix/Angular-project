import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Score } from './definitions';

@Injectable({
  providedIn: 'root'
})
export class SnakeService {

  constructor(private _http: HttpClient) { }
  
  load (){ 
    const URL = 'http://scores.chrum.it/snake';
     return this._http.get<Array<Score>>(URL);
  }
}
