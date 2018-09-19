import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AngularhomeComponent } from './Angular/angularhome/angularhome.component';
import { AngularMenuComponent } from './Angular/angular-menu/angular-menu.component';
import { ReactMenuComponent } from './React/react-menu/react-menu.component';
import { ReacthomeComponent } from './React/reacthome/reacthome.component';
import { CreateReactAppComponent } from './React/create-react-app/create-react-app.component';
import { AngularcliComponent } from './Angular/angularcli/angularcli.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    NotfoundComponent,
    AngularhomeComponent,
    AngularMenuComponent,
    ReactMenuComponent,
    ReacthomeComponent,
    CreateReactAppComponent,
    AngularcliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
