import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public addedCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = { name: '', power: 0 }

  addCharacter() {
    if (!this.character.name.length) return;

    this.addedCharacter.emit({...this.character});
    this.character = { name: '', power: 0 };
  }

}
