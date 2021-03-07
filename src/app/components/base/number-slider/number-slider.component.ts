import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'packer-number-slider',
  templateUrl: './number-slider.component.html',
  styleUrls: ['./number-slider.component.scss']
})
export class NumberSlider implements OnInit {
	@Input() title!: string;
	@Output() sliderOpen = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
