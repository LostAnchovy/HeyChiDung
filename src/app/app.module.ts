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
import { AboutComponent } from './about/about.component';
import { NodehomeComponent } from './Node/nodehome/nodehome.component';
import { NodeMenuComponent } from './Node/node-menu/node-menu.component';
import { AngularcomponentsComponent } from './Angular/angularcomponents/angularcomponents.component';
import { JavascriptbasicsComponent } from './javascriptbasics/javascriptbasics.component';
import { ExpressMenuComponent } from './Express/express-menu/express-menu.component';
import { ExpresshomeComponent } from './Express//expresshome/expresshome.component';


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
    AngularcliComponent,
    AboutComponent,
    NodehomeComponent,
    NodeMenuComponent,
    AngularcomponentsComponent,
    JavascriptbasicsComponent,
    ExpressMenuComponent,
    ExpresshomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
