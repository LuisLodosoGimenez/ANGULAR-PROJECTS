import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileInitComponent } from './user-profile-init.component';

describe('UserProfileInitComponent', () => {
  let component: UserProfileInitComponent;
  let fixture: ComponentFixture<UserProfileInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileInitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserProfileInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
