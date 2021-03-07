import { Component, OnInit, Input } from '@angular/core';
import { Place } from '@interface/place.interface';

@Component({
  selector: 'app-places-map',
  templateUrl: './places-map.component.html',
  styleUrls: ['./places-map.component.scss']
})
export class PlacesMapComponent implements OnInit {
	@Input() places: Place[] = [];

	// Map center
	center: number[] = [53.2734, -7.77832031];

  constructor() { 
  }

  ngOnInit(): void {
  }

}
