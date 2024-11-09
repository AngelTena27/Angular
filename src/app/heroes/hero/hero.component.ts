import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = "Iron man"
  public age: number = 20

  changeName(): void {
    this.name = "capitan america"
  }

  changeAge() {
    this.age = 40
  }

  get capitalizedName(): string {
    return this.name.toUpperCase()
  }

  getheroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  reset(): void {
    this.name = "Iron man"
    this.age = 20
  }

}
