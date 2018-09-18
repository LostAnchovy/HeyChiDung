import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component'
import {NotfoundComponent} from './notfound/notfound.component'

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
