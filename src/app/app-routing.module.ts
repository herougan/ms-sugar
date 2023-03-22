import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TableauComponent } from './pages/tableau/tableau.component';

const routes: Routes = [
  { path: '', redirectTo: '/tableau', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'tableau', component: TableauComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
