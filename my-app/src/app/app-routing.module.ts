import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MisCursosComponent } from './mis-cursos/mis-cursos.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', children:[
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: '', component: AppComponent },
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'miscursos', component: MisCursosComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }