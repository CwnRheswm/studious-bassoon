import {
	AfterViewInit,
	Component,
	ComponentFactoryResolver,
	ElementRef,
	EventEmitter,
	OnDestroy,
	Output,
	ViewChild,
	ViewContainerRef
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'

@Component({
  selector: 'packer-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class Menu implements AfterViewInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
	@Output() page = new EventEmitter<string>();
	@ViewChild('page', {read: ViewContainerRef}) pageRef!: ViewContainerRef;
	activePage: string;
	isTravelShowing: boolean;
	travelDestination: string;

  constructor(
  	private viewContainerRef: ViewContainerRef,
  	private cfr: ComponentFactoryResolver,
  ) {
    this.activePage = 'travel';
    this.isTravelShowing = false;
    this.travelDestination = '';
  }

  ngAfterViewInit(): void {
  	this.getTravelPage();
  }

  async getSetsPage() {
  	this.pageRef.clear();
  	const { SetPage } = await import('@pages');
  	this.pageRef.createComponent(
  		this.cfr.resolveComponentFactory(SetPage)
  	);
  }

  async getTravelPage() {
  	this.pageRef.clear();
  	const { TravelPage } = await import('@pages');
  	const travelPage = this.pageRef.createComponent(
  		this.cfr.resolveComponentFactory(TravelPage)
  	);

  	travelPage.instance.destination.pipe(takeUntil(this.destroy$)).subscribe((i: string) => {
  		this.toggleTravelDisplay(true, i)
  	})
  }

  setPage(name: string): void {
  	this.activePage = name;
  	if (this.activePage !== 'sets') this.getTravelPage();
  	if (this.activePage !== 'travel') this.getSetsPage();
  	// this.page.emit(name);
  }

  switchPageRight() {
  	if (this.activePage !== 'sets') this.getSetsPage();
  }

  switchPageLeft() {
  	if (this.activePage !== 'travel') this.getTravelPage();
  }

  async toggleTravelDisplay(isShowing: boolean, destination: string) {
  	this.isTravelShowing = isShowing;
  	this.travelDestination = destination;
  	const { LuggageMenu } = await import('@components');
  	const { Luggage } = await import('@components');
  	const luggageMenu = this.pageRef.createComponent(this.cfr.resolveComponentFactory(LuggageMenu));

  	luggageMenu.instance.title = 'Bonaire';

  	const luggage = this.pageRef.createComponent(this.cfr.resolveComponentFactory(Luggage));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
