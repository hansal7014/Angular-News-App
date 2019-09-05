import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { NewsFeedComponent } from './news-feed.component';
import { GuardAuthService } from './guard-auth.service';
import { RegisterComponent } from './register.component';

const routes: Routes = [{ path: 'news-feed', component: NewsFeedComponent, canActivate: [GuardAuthService] }, { path: 'register', component: RegisterComponent }, { path: 'login', component: LoginComponent }, { path: '', redirectTo: '/login', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
