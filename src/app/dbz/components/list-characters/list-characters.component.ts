import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrl: './list-characters.component.css'
})
export class ListCharactersComponent {

  @Input() public characterList: Character[] = [];
  @Output() deletedCharacter: EventEmitter<string> = new EventEmitter();

  deleteCharacter(id?: string): void {

    if (!id) return;

    this.deletedCharacter.emit(id);
  }
}
