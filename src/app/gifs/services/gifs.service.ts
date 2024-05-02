import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string [] = [];
  private giphy_apiKey: string = 'pn4w8jTC5w5oXMKBDUxW9wDRHJa5sxcb';
  private serviceUrl:string = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient ) { }

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

  searchTag ( tag:string ):void {
    if ( tag.length === 0 ) return;
    this.organizeHistory( tag );

    const params = new HttpParams()
    .set ( 'api_key', this.giphy_apiKey )
    .set ( 'limit', '10' )
    .set ( 'q', tag );

    this.http.get(`${ this.serviceUrl }/search`, { params })
    .subscribe( res => {


      console.log( res );
    } )


    /* fetch('https://api.giphy.com/v1/gifs/search?api_key=pn4w8jTC5w5oXMKBDUxW9wDRHJa5sxcb&q=valorant&limit=10')
      .then( resp => resp.json() )
      .then( data => console.log( data ) ); */
  }

}
