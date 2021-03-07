import { Component, OnInit, Input } from '@angular/core';
import { PlacesService, PlacesBaseService } from '@services/places.service';
import { Place } from '@interface/place.interface';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {
	@Input() places: Place[] = [];

  constructor(private placesBaseService: PlacesBaseService) { }

  ngOnInit(): void {
  }

  // onDelete(id: string) {
  onDelete(place: Place) {
  	// this.placesService.deletePlace(id);
  	this.placesBaseService.deletePlace(place);
  }

  // onUpdate(id: string, visited: boolean) {
  onUpdate(place: Place) {
  	// this.placesService.updatePlace(id, !visited);
  	place.visited = !place.visited
  	this.placesBaseService.updatePlace(place);
  }
}
