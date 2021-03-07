import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'packer-luggage-menu',
  templateUrl: './luggage-menu.component.html',
  styleUrls: ['./luggage-menu.component.scss']
})
export class LuggageMenu implements OnInit {
	@Input() title!: string;
	allOpen: boolean = false;
	activeSort: string = 'alpha';
	alphaDown: boolean = true;
	dateDown: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
}
