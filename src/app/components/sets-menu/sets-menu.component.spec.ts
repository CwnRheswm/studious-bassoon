import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetsMenuComponent } from './sets-menu.component';

describe('SetsMenuComponent', () => {
  let component: SetsMenuComponent;
  let fixture: ComponentFixture<SetsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
