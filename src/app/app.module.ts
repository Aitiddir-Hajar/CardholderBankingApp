import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment';


import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';


import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthService } from "./shared/services/auth.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CardComponent } from './components/card/card.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdressComponent } from './components/adress/adress.component';
import { ListComponent } from './components/list/list.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    VerifyEmailComponent,
    LoginComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    SidenavComponent,
    ChangepasswordComponent,
    CardComponent,
    ContactComponent,
    AdressComponent,
    ListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatInputModule, 
    MatSelectModule,
    MatCardModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
