import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  heroeNames: string[] = ['Spiderman', 'Iroman', 'Hulk', 'She Hulk', 'Thor']
  deletedHero?: string

  removeLastHeroe():void{
    this.deletedHero = this.heroeNames.pop()
  }

}
