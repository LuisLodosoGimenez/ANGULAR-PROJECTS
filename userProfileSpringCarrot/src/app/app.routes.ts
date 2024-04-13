import { Routes } from '@angular/router'
import { UserProfileComponent } from './user-profile/user-profile.component'
import { AppComponent } from './app.component'
import { HomePageComponent } from './home-page/home-page.component'
import { UserProfileInitComponent } from './user-profile/user-profile-init/user-profile-init.component'
import { UserProfileOrderListComponent } from './user-profile/user-profile-order-list/user-profile-order-list.component'
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component'

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
        component: UserProfileOrderListComponent,
      },
    ],
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
  },
]
