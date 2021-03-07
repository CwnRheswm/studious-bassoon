import { 
	Component,
	ComponentFactoryResolver,
	OnInit,
	ViewContainerRef
} from '@angular/core';
import { TravelDestination } from '@components';

@Component({
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelPage implements OnInit {

  constructor(
  	private vcr: ViewContainerRef,
  	private cfr: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
  	[0,1].forEach(() => {
  		this.addComponent(TravelDestination)
  	})
  }

  addComponent(component: any): void {
  	this.vcr.createComponent(this.cfr.resolveComponentFactory(component));
  }

}
