import { Component } from '@angular/core'
import { UserProfileOrderListComponent } from '../user-profile-order-list/user-profile-order-list.component'
import { UserProfilePersonalInfoComponent } from '../user-profile-personal-info/user-profile-personal-info.component'

@Component({
  selector: 'app-user-profile-init',
  standalone: true,
  templateUrl: './user-profile-init.component.html',
  styleUrl: './user-profile-init.component.css',
  imports: [UserProfileOrderListComponent, UserProfilePersonalInfoComponent],
})
export class UserProfileInitComponent {}
