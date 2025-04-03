import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';

import { HpApiService } from '../../services/hp-api.service';
import { Character } from '../../models/character';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule
  ],
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css']
})
export class CharacterlistComponent implements OnInit {
  characters: Character[] = [];
  filteredCharacters: Character[] = [];
  selectedHouse = '';
  houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

  constructor(private hpApi: HpApiService) {}

  ngOnInit(): void {
    this.hpApi.getAllCharacters().subscribe(data => {
      this.characters = data;
      this.filteredCharacters = data;
    });
  }

  onHouseChange(): void {
    if (this.selectedHouse) {
      this.filteredCharacters = this.characters.filter(c => c.house === this.selectedHouse);
    } else {
      this.filteredCharacters = this.characters;
    }
  }
}
