import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroListName: string [] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'She Hulk',
    'Thor'
  ]

  public deledtedHero?: string;

  removeLastHeroe(): void {
    this.deledtedHero = this.heroListName.pop();
  }

}
