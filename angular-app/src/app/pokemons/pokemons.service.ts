import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  getAll(){
     return this.http.get("https://pokeapi.co/api/v2/pokemon?offset=300&limit=100");
  }
}
