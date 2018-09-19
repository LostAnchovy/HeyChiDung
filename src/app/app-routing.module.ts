import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component'
import {NotfoundComponent} from './notfound/notfound.component'
import {AngularhomeComponent} from './Angular/angularhome/angularhome.component'
import {ReacthomeComponent} from './React/reacthome/reacthome.component'
import {CreateReactAppComponent} from './React/create-react-app/create-react-app.component'
import { AngularcliComponent } from './Angular/angularcli/angularcli.component';
import { AboutComponent } from './about/about.component';
import { NodehomeComponent } from './Node/nodehome/nodehome.component';
import { AngularcomponentsComponent } from './Angular/angularcomponents/angularcomponents.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'angular', component: AngularhomeComponent },
  { path: 'angular/angularcli', component: AngularcliComponent },
  { path: 'angular/angular-components', component: AngularcomponentsComponent},
  { path: 'node', component: NodehomeComponent},
  { path: 'react', component: ReacthomeComponent},
  { path: 'react/create-react-app', component: CreateReactAppComponent},
  { path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
