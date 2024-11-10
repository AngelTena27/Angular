import { Component, EventEmitter, Output } from '@angular/core';
import { CharacterProps } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Output()
  onNewCharacter: EventEmitter<CharacterProps> = new EventEmitter

  public newCharacter: CharacterProps = {
    id: uuid(),
    name: "",
    power: 0
  }

  emitCharacter(): void {
    console.log(this.newCharacter);

    if (this.newCharacter.name === "") return

    this.onNewCharacter.emit(this.newCharacter)

    this.newCharacter = {...this.newCharacter, name: "", power: 0}

  }

}
