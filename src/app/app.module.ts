import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CountryComponent } from './country/country.component';

import { UserAutModule } from './user-aut/user-aut.module';
import { HeadsComponent } from './heads/heads.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { MatButtonModule } from '@angular/material/button';
import { ChildComponent } from './child/child.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ProfileComponent,
    UserListComponent,
    UserAuthComponent,
    StudentListComponent,
    CountryComponent,
    HeadsComponent,
    HeaderComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    UserAutModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
