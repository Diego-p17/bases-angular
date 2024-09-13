import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor(private dbzService: DbzService) {
  }

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacterById(id: string): void {
    this.dbzService.deletedCharacterById(id);
  }

  addCharacter(character:Character): void {
    this.dbzService.addCharacter(character);
  }

}
