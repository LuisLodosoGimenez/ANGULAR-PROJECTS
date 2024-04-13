import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileOrderListComponent } from './user-profile-order-list.component';

describe('UserProfileOrderListComponent', () => {
  let component: UserProfileOrderListComponent;
  let fixture: ComponentFixture<UserProfileOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileOrderListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserProfileOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
