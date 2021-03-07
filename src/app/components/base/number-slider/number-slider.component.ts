import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'packer-number-slider',
  templateUrl: './number-slider.component.html',
  styleUrls: ['./number-slider.component.scss']
})
export class NumberSlider implements OnInit {
	@Input() title!: string;
<<<<<<< HEAD
	@Input() number!: number;
	@Output() sliderOpen = new EventEmitter();
	// @Output() numberChange = new EventEmitter<number>();
=======
	@Output() sliderOpen = new EventEmitter();
>>>>>>> 19354ce2b11a6152ad2ee4a50a7b1e0037fa4f60

  constructor() { }

  ngOnInit(): void {
  }

}
