import { Component, OnInit, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'packer-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetails implements OnInit {
	isSliderOpen = false;
	// @ViewChild('iconAutocompleteInput') input: MatInput;

  constructor() { }

  ngOnInit(): void {
  }

  sliderChange(isOpened: boolean) {
  	this.isSliderOpen = isOpened;
  }

}
