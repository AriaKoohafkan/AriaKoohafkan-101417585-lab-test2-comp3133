// src/app/components/characterfilter/characterfilter.component.ts
import { Component } from '@angular/core';
import { HarryPotterService } from '../../services/harry-potter.service';
import { Character } from '../../models/character';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatSelectModule, MatCardModule, FormsModule],
  templateUrl: './characterfilter.component.html',
  styleUrls: ['./characterfilter.component.scss']
})
export class CharacterfilterComponent {
  selectedHouse: string = '';
  houses: string[] = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
  characters: Character[] = [];

  constructor(private hpService: HarryPotterService) {}

  filterCharacters(): void {
    if (this.selectedHouse) {
      this.hpService.getCharactersByHouse(this.selectedHouse).subscribe((data) => {
        this.characters = data;
      });
    }
  }
}
