import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMenuOverlayComponent } from './profile-menu-overlay.component';

describe('ProfileMenuOverlayComponent', () => {
  let component: ProfileMenuOverlayComponent;
  let fixture: ComponentFixture<ProfileMenuOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMenuOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMenuOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
