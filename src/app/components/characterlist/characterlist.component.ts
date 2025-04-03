// src/app/components/characterlist/characterlist.component.ts
import { Component, OnInit } from '@angular/core';
import { HarryPotterService } from '../../services/harry-potter.service';
import { Character } from '../../models/character';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatCardModule, RouterModule],
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.scss']
})
export class CharacterlistComponent implements OnInit {
  characters: Character[] = [];

  constructor(private hpService: HarryPotterService) {}

  ngOnInit(): void {
    this.hpService.getAllCharacters().subscribe((data) => {
      this.characters = data;
    });
  }
}
