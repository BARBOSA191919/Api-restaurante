import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { AppRoutingModule } from '../app-routing.module';
import { ContenidoHomeComponent } from './components/contenido-home/contenido-home.component';
import { NavWhiteComponent } from './components/nav-white/nav-white.component';
import { MenuDescuentoComponent } from './components/menu-descuento/menu-descuento.component';
import { CardChefsComponent } from './components/card-chefs/card-chefs.component';
import { SeccionMenuComponent } from './components/seccion-menu/seccion-menu.component';
import { SeccionBebidasComponent } from './components/seccion-bebidas/seccion-bebidas.component';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';
import { NavWhiteIconComponent } from './components/nav-white-icon/nav-white-icon.component';
import { NavSecondComponent } from './components/nav-second/nav-second.component';
import { FooterPrincipalComponent } from './components/footer-principal/footer-principal.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SeccionAlmuerzoComponent } from './components/seccion-almuerzo/seccion-almuerzo.component';
import { SeccionComidaComponent } from './components/seccion-comida/seccion-comida.component';

@NgModule({
  declarations: [
    NavComponent,
    ContenidoHomeComponent,
    NavWhiteComponent,
    MenuDescuentoComponent,
    CardChefsComponent,
    SeccionMenuComponent,
    SeccionBebidasComponent,
    CarritoComprasComponent,
    NavWhiteIconComponent,
    NavSecondComponent,
    FooterPrincipalComponent,
    SeccionAlmuerzoComponent,
    SeccionComidaComponent,
  ],
  imports: [CommonModule, AppRoutingModule, MatSnackBarModule],
  exports: [
    NavComponent,
    ContenidoHomeComponent,
    NavWhiteComponent,
    MenuDescuentoComponent,
    CardChefsComponent,
    SeccionMenuComponent,
    SeccionBebidasComponent,
    CarritoComprasComponent,
    NavWhiteIconComponent,
    NavSecondComponent,
    FooterPrincipalComponent,
    SeccionAlmuerzoComponent,
  ],
})
export class SharedModule {}
