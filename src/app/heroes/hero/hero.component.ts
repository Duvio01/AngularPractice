import { Component } from '@angular/core';

@Component({
  selector: 'app-heores-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  name: string  = 'ironman'
  age: number = 45

  get capitalizedName(): string {
    return this.name.toUpperCase()
  }

  getheroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero():void {
    this.name = 'Spiderman'
  }

  changeAge():void{
    this.age = 25
  }

  resetForm():void{
    this.age = 45
    this.name = 'ironman'
  }
}
