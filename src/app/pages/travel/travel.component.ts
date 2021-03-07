import { 
	Component,
	ComponentFactoryResolver,
<<<<<<< HEAD
  EventEmitter,
  OnDestroy,
	OnInit,
  Output,
	ViewContainerRef
} from '@angular/core';
import { TravelDestination, TravelMenu } from '@components';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
=======
	OnInit,
	ViewContainerRef
} from '@angular/core';
import { TravelDestination } from '@components';
>>>>>>> 19354ce2b11a6152ad2ee4a50a7b1e0037fa4f60

@Component({
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
<<<<<<< HEAD
export class TravelPage implements OnDestroy, OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  @Output() destination = new EventEmitter<string>();
=======
export class TravelPage implements OnInit {
>>>>>>> 19354ce2b11a6152ad2ee4a50a7b1e0037fa4f60

  constructor(
  	private vcr: ViewContainerRef,
  	private cfr: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
<<<<<<< HEAD
    this.vcr.createComponent(this.cfr.resolveComponentFactory(TravelMenu));
  	[0,1,2,3,4,5,6,7,8,9].forEach((x) => {
  		this.addComponent(TravelDestination, x)
  	});
  }

  addComponent(component: any, y: any): void {
  	let componentInstance: any = this.vcr.createComponent(this.cfr.resolveComponentFactory(component));

    componentInstance.instance.title = `TITLE ${y}`;
    componentInstance.instance.icon = 'travel_explore';
    componentInstance.instance.clear.pipe(takeUntil(this.destroy$)).subscribe((b: boolean) => {
      if (b) {
        this.clear();
        this.destination.emit('Bonaire');
      }
    });
  }

  clear() {
    this.vcr.clear();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
=======
  	[0,1].forEach(() => {
  		this.addComponent(TravelDestination)
  	})
  }

  addComponent(component: any): void {
  	this.vcr.createComponent(this.cfr.resolveComponentFactory(component));
  }

>>>>>>> 19354ce2b11a6152ad2ee4a50a7b1e0037fa4f60
}
