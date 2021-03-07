import { Component, OnInit, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';

<<<<<<< HEAD

=======
>>>>>>> 19354ce2b11a6152ad2ee4a50a7b1e0037fa4f60
@Component({
  selector: 'packer-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetails implements OnInit {
	isSliderOpen = false;
<<<<<<< HEAD
	slidingValue?: number|string;
	key: string = '';
	model: { [key: string]: number|string } = {
		'title': '',
		'icon': '',
		'number': 0,
		'size': 0,
		'weight': 0,
		'notes': 'These are notes'
	}
=======
	// @ViewChild('iconAutocompleteInput') input: MatInput;
>>>>>>> 19354ce2b11a6152ad2ee4a50a7b1e0037fa4f60

  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
  sliderChange(sliderValues: {status: boolean, name?: string}) {
  	this.isSliderOpen = sliderValues.status;

  	if (typeof sliderValues.name === 'string') {
  		this.key = sliderValues.name.toLowerCase();
  	}
  	if (sliderValues.status && this.key) {
  		this.slidingValue = this.model[this.key];
  	}
  }

  updateModelSlider(newValue: number) {
  	this.model[this.key] = newValue;
  	console.log(this.model)
  }
=======
  sliderChange(isOpened: boolean) {
  	this.isSliderOpen = isOpened;
  }

>>>>>>> 19354ce2b11a6152ad2ee4a50a7b1e0037fa4f60
}
