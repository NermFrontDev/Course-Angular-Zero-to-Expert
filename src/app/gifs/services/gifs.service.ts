import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string [] = [];
  private giphy_apiKey: string = 'pn4w8jTC5w5oXMKBDUxW9wDRHJa5sxcb';

  constructor() { }

  private organizeHistory ( tag: string ) {
    tag = tag.toLowerCase();

    if ( this._tagsHistory.includes(tag) ) {
      // Si recibe un tag del mismo, se elimina
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag != tag );
    }
    // Se inserta el utlimo
    this._tagsHistory.unshift( tag );
    // Se delimita que muestre solo 10
    this._tagsHistory = this.tagsHistory.splice( 0, 10 );
  }

  get tagsHistory() {
    return [ ...this._tagsHistory ];
  }

  public searchTag ( tag:string ): void {
    if ( tag.length === 0 ) return;
    this.organizeHistory( tag );
  }

}
