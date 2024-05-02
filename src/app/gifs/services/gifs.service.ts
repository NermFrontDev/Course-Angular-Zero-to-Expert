import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifsList: Gif [] = [];

  private _tagsHistory: string [] = [];
  private giphy_apiKey: string = 'pn4w8jTC5w5oXMKBDUxW9wDRHJa5sxcb';
  private serviceUrl:string = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient ) {
    this.loadLocalStorage();
  }

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
    this.saveLocalStorage();
  }

  get tagsHistory() {
    return [ ...this._tagsHistory ];
  }

  private saveLocalStorage ():void {
    localStorage.setItem ('History', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage (): void {
    if ( !localStorage.getItem('History') ) return;
    this._tagsHistory = JSON.parse( localStorage.getItem('History')! );

    if ( this._tagsHistory.length === 0 ) return;
    this.searchTag(this._tagsHistory[0]);
  }

  searchTag ( tag:string ):void {
    if ( tag.length === 0 ) return;
    this.organizeHistory( tag );

    const params = new HttpParams()
    .set ( 'api_key', this.giphy_apiKey )
    .set ( 'limit', '10' )
    .set ( 'q', tag );

    this.http.get<SearchResponse>(`${ this.serviceUrl }/search`, { params })
    .subscribe( res => {

      this.gifsList = res.data;
      // console.log({ gifs: this.gifsList });
    } )


    /* fetch('https://api.giphy.com/v1/gifs/search?api_key=pn4w8jTC5w5oXMKBDUxW9wDRHJa5sxcb&q=valorant&limit=10')
      .then( resp => resp.json() )
      .then( data => console.log( data ) ); */
  }

}
