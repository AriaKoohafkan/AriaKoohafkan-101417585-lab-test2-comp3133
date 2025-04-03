// src/app/components/characterdetails/characterdetails.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HarryPotterService } from '../../services/harry-potter.service';
import { Character } from '../../models/character';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatCardModule],
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.scss']
})
export class CharacterdetailsComponent implements OnInit {
  character: Character | null = null;

  constructor(
    private route: ActivatedRoute,
    private hpService: HarryPotterService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.hpService.getCharacterDetails(id).subscribe((data) => {
        this.character = data;
      });
    }
  }
}
