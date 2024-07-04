import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/components/home-page/home-page.component';
import { PageBlogComponent } from './pages/components/page-blog/page-blog.component';
import { PageReservationComponent } from './pages/components/page-reservation/page-reservation.component';
import { UserRegisterComponent } from './pages/components/user-register/user-register.component';
import { PageListComponent } from './pages/components/page-list/page-list.component';
import { ActualizarUserComponent } from './pages/components/actualizar-user/actualizar-user.component';
import { LoguinComponent } from './pages/components/loguin/loguin.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: HomePageComponent,
  },
  {
    path: 'blog',
    component: PageBlogComponent,
  },
  {
    path: 'reserva',
    component: PageReservationComponent,
  },
  {
    path: 'registro',
    component: UserRegisterComponent,
  },
  {
    path: 'listUser',
    component: PageListComponent,
  },
  {
    path: 'actualizarUser',
    component: ActualizarUserComponent,
  },
  {
    path: 'loguin',
    component: LoguinComponent,
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
