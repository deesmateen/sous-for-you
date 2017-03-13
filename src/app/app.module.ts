import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

// Services
import { HttpService } from './shared/services/http.service';
import { ConstantsService } from './shared/services/constants.service';
import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/services/auth.guard';


//Components
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { SharedComponent } from './shared/shared.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { routing } from "./app.routing";
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { RandomMealComponent } from './pages/random-meal/random-meal.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { RecipeItemComponent } from './pages/recipes/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './pages/recipes/recipe-detail/recipe-detail.component';
import { RecipesListComponent } from './pages/recipes/recipes-list/recipes-list.component';
import { ShoppingListAddComponent } from './pages/shopping-list/shopping-list-add.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    SharedComponent,
    LoginComponent,
    LogoutComponent,
    HomepageComponent,
    NavbarComponent,
    RecipesComponent,
    IngredientsComponent,
    ProfileComponent,
    FavoritesComponent,
    RandomMealComponent,
    SignupComponent,
    ShoppingListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesListComponent,
    ShoppingListAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routing,
    ReactiveFormsModule
  ],
  providers: [
    HttpService,
    ConstantsService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
