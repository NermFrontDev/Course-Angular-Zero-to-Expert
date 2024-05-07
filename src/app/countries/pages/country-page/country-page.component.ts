import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  constructor(
    private activatedRouter: ActivatedRoute,
    private countriesService: CountriesService) {

  }
  ngOnInit(): void {
    this.activatedRouter.params
    .subscribe( ({ id }) => {
      this.countriesService.searchCountryByCode( id )
        .subscribe( country => {
          console.log( country );
        } );

    } )
  }

}
