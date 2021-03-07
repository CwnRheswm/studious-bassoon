<<<<<<< HEAD
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 19354ce2b11a6152ad2ee4a50a7b1e0037fa4f60

@Component({
  templateUrl: './travel-destination.component.html',
  styleUrls: ['./travel-destination.component.scss']
})
export class TravelDestination implements OnInit {
<<<<<<< HEAD
	@Input() icon!: string;
	@Input() title!: string;
	@Output() clear = new EventEmitter<boolean>();
=======
>>>>>>> 19354ce2b11a6152ad2ee4a50a7b1e0037fa4f60

  constructor() { }

  ngOnInit(): void {
  }

}
