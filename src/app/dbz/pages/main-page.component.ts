import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { CharacterProps } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: "./main-page.component.html",
    styleUrl: './main-page.component.css'

})

export class MainPageComponent {

    constructor(private dbzService: DbzService) { }

    get characters(): CharacterProps[] {

        return this.dbzService.characters;
    }

    onDeleteCharacter(id: string): void {
        this.dbzService.DeleteCharacterById(id)
    }

    addCharacter(character: CharacterProps): void {
        this.dbzService.addNewCharacter(character)
    }

}