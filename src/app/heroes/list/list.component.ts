import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ["Iron man", "Spiderman", "Hulk", "Thor"]
  public removeHeroe?: string

  removeLastHeroe(): void {
    this.removeHeroe = this.heroNames.pop()
  }

}
