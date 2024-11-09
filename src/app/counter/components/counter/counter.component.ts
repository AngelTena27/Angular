import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h1>Hola tekilin</h1>
    <h3>{{counter}}</h3>

    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(1)">+1</button>
    `
})

export class CounterComponent {
    constructor() { }

    public counter: number = 0

    increaseBy(value: number): void {
        this.counter += value
    }

    resetCounter(): void {
        this.counter = 0
    }

}