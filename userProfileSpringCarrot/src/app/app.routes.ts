import { Routes } from '@angular/router'
import { UserProfileComponent } from './user-profile/user-profile.component'
import { AppComponent } from './app.component'
import { HomePageComponent } from './home-page/home-page.component'
import { UserProfileInitComponent } from './user-profile/user-profile-init/user-profile-init.component'
import { UserProfileOrderListComponent } from './user-profile/user-profile-order-list/user-profile-order-list.component'
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component'
import { UserProfilePersonalInfoComponent } from './user-profile/user-profile-personal-info/user-profile-personal-info.component'
import { LogInComponent } from './log-in/log-in.component'
import { SignInComponent } from './sign-in/sign-in.component'

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    children: [
      {
        path: '',
        component: UserProfileInitComponent,
      },
      {
        path: 'personal-info',
        component: UserProfilePersonalInfoComponent,
      },
      {
        path: 'order-list',
        component: UserProfileOrderListComponent,
      },
    ],
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
  },
  {
    path: 'log-in',
    component: LogInComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
]
