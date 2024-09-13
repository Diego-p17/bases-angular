import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from "uuid";

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters: Character[] = [
    {id: uuid(),name: 'Krillin', power: 1000},
    {id: uuid(),name: 'Goku', power: 2300},
    {id: uuid(),name: 'Freezer', power: 800},
    {id: uuid(),name: 'Androide', power: 120},
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  deletedCharacterById(idCharacter: string): void {
    this.characters = this.characters.filter(({ id }) => id !== idCharacter);
  }
}
