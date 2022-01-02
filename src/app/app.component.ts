import { BreweryService } from './services/brewery.service';
import { Component, OnInit } from '@angular/core';
import { Brewery } from './models/brewery.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  throttle = 0;
  distance = 2;
  page = 1;
  breweries: Brewery[] | any[] = [];

  constructor(private breweryService: BreweryService) {}

  ngOnInit(): void {
    this.breweryService
      .getBreweries(this.page)
      .subscribe((breweries: Brewery[]) => {
        this.breweries = breweries;
      });
  }

  onScroll(): void {
    this.breweryService
      .getBreweries(++this.page)
      .subscribe((breweries: Brewery[]) => {
        this.breweries.push(...breweries);
      });
  }
}
