// src/app/services/harry-potter.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class HarryPotterService {
  private allCharactersUrl = 'https://hp-api.onrender.com/api/characters';
  private characterByHouseUrl = 'https://hp-api.onrender.com/api/characters/house';
  private characterDetailsUrl = 'https://hp-api.onrender.com/api/character';

  constructor(private http: HttpClient) {}

  // Fetch all characters
  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.allCharactersUrl);
  }

  // Fetch characters by house
  getCharactersByHouse(house: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.characterByHouseUrl}/${house.toLowerCase()}`);
  }

  // Fetch details for a specific character (by id)
  getCharacterDetails(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.characterDetailsUrl}/${id}`);
  }
}
