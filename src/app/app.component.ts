import { Component, OnInit } from '@angular/core';
import { CitiesService } from './city.service';

import { Item } from './item';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/octicons/build/octicons.css';
import '../styles/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [CitiesService]
})

export class AppComponent implements OnInit {
  cities: Item[];
  companies: Item[];
  sortOrder = true;
  selectedItemG: Item;
  selectedProps: any[] = [];
  text = '';

  constructor(private citiesService: CitiesService) { }

  getCities(): void {
    this.citiesService.getCities().then(cities => this.cities = cities);
  }

  getCompanies(): void {
    this.citiesService.getCompanies().then(companies => this.companies = companies);
  }

  ngOnInit(): void {
    this.getCities();
    this.getCompanies();
  }
}
