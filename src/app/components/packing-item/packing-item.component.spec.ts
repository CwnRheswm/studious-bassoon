import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingItemComponent } from './packing-item.component';

describe('PackingItemComponent', () => {
  let component: PackingItemComponent;
  let fixture: ComponentFixture<PackingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackingItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
