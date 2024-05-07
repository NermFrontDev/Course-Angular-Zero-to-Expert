import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';

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
    private countriesService: CountriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRouter.params
    .pipe(
      switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id ) )
    )
    .subscribe( country => {

      if ( !country ) {
        return this.router.navigateByUrl('');
      }

      console.log('Tenemos un país!');

      return;

    } )
  };

}
