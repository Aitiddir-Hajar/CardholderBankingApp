import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CardComponent } from './components/card/card.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdressComponent } from './components/adress/adress.component';
import { ListComponent } from './components/list/list.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: '/dashboard/card', pathMatch: 'full' },
      { path: 'card', component: CardComponent},
      { path:'contact', component: ContactComponent},
      { path: 'adress', component: AdressComponent},
      { path:'list', component: ListComponent},
      { path:'about', component: AboutComponent},
    ]
  },
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'changepassword', component: ChangepasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
