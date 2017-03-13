import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { RandomMealComponent } from './pages/random-meal/random-meal.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard  } from "./shared/services/auth.guard";
import { ShoppingListComponent  } from "./pages/shopping-list/shopping-list.component";

const App_Routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  { path: 'homepage', component: HomepageComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'recipes', component: RecipesComponent, canActivate: [AuthGuard]},
  { path: 'ingredients', component: IngredientsComponent, canActivate: [AuthGuard]},
  { path: 'random-meal', component: RandomMealComponent, canActivate: [AuthGuard]},
  { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard]}

];

export const routing = RouterModule.forRoot(App_Routes);
