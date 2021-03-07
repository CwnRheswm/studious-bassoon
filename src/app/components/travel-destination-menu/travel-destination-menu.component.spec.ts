import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelDestinationMenuComponent } from './travel-destination-menu.component';

describe('TravelDestinationMenuComponent', () => {
  let component: TravelDestinationMenuComponent;
  let fixture: ComponentFixture<TravelDestinationMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelDestinationMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelDestinationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
