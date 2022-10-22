import { Component, OnInit } from '@angular/core';

export interface facilitiesInterface {
  siteFacility: string;
  feature: string;
}

const FEATURES: any = [
  {position: 1, siteFacility: '5 Hardstanding piches', feature: 'With electric hookup'},
  {position: 2, siteFacility: '10 grass piches', feature: '	Optional electric hookup for tents'},
  {position: 3, siteFacility: '2 heated wet rooms', feature: 'Both with shower and toilets'},
  {position: 4, siteFacility: '2 heated washrooms', feature: 'Both with toilets, one with baby change facility'},
  {position: 5, siteFacility: 'Caravan specific items available', feature: 'Gas sold here'},
  {position: 6, siteFacility: 'Chemical toilet disposal point', feature: '(Green toilet fluid only, supplies are available to purchase)'},
  {position: 7, siteFacility: 'Items for sale or hire', feature: 'Ice creams, fire pits and BBQs available'}
];

@Component({
  selector: 'app-facilities-table',
  templateUrl: './facilities-table.component.html',
  styleUrls: ['./facilities-table.component.scss']
})
export class FacilitiesTableComponent {
  displayedColumns: string[] = [ 'siteFacility', 'feature'];
  dataSource = FEATURES;
}
