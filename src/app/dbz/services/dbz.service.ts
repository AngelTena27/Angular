import { Injectable } from '@angular/core';
import { CharacterProps } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class DbzService {
    constructor() { }

    public characters: CharacterProps[] = [
        {
            id: uuid(),
            name: "Krilin",
            power: 500
        },
        {
            id: uuid(),
            name: "Goku",
            power: 1000
        },
        {
            id: uuid(),
            name: "vegeta",
            power: 950
        },
    ]

    addNewCharacter(character: CharacterProps): void {
        this.characters.push(character)

        console.log(`Personaje creado`, character);
    }

    DeleteCharacterById(id: string) {
        
        this.characters = this.characters.filter( character => character.id !== id)
    }
}