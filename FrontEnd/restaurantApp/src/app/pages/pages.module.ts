import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBlogComponent } from './components/page-blog/page-blog.component';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageReservationComponent } from './components/page-reservation/page-reservation.component';
import { AppRoutingModule } from '../app-routing.module';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { PageListComponent } from './components/page-list/page-list.component';
import { FormsModule } from '@angular/forms';
import { ActualizarUserComponent } from './components/actualizar-user/actualizar-user.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoguinComponent } from './components/loguin/loguin.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    PageBlogComponent,
    HomePageComponent,
    PageReservationComponent,
    UserRegisterComponent,
    PageListComponent,
    ActualizarUserComponent,
    LoguinComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
  ],
  exports: [
    PageBlogComponent,
    HomePageComponent,
    UserRegisterComponent,
    ActualizarUserComponent,
    LoguinComponent,
  ],
})
export class PagesModule {}
