import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';

const App_Routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  { path: 'homepage', component: HomepageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'recipes', component: RecipesComponent},
  { path: 'ingredients', component: IngredientsComponent}

];

export const routing = RouterModule.forRoot(App_Routes);
