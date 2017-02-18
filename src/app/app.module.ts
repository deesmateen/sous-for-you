import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Services
import { HttpService } from './shared/services/http.service';
import { ConstantsService } from './shared/services/constants.service';

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
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routing
  ],
  providers: [
    HttpService,
    ConstantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
