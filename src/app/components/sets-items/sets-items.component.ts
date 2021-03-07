import { 
	Component,
	ComponentFactoryResolver,
	OnInit,
	ViewContainerRef
} from '@angular/core';
import { ItemDetails } from '@components/item-details/item-details.component';

@Component({
  selector: 'packer-sets-items',
  templateUrl: './sets-items.component.html',
  styleUrls: ['./sets-items.component.scss']
})
export class SetsItems implements OnInit {

  constructor(
  	private vcr: ViewContainerRef,
  	private cfr: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
  	[0,1].forEach((x) => {
  		this.addComponent(ItemDetails)
  	})
  }

  addComponent(component: any): void {
  	this.vcr.createComponent(this.cfr.resolveComponentFactory(component));
  }
}
