import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharacterProps } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: CharacterProps[] = []

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter

  onDeleteCharacter(id: string): void {
    console.log(id)

    this.onDelete.emit(id)
}
}
