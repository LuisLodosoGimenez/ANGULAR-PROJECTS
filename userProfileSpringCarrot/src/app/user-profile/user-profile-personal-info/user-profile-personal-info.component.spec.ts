import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilePersonalInfoComponent } from './user-profile-personal-info.component';

describe('UserProfilePersonalInfoComponent', () => {
  let component: UserProfilePersonalInfoComponent;
  let fixture: ComponentFixture<UserProfilePersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfilePersonalInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserProfilePersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
