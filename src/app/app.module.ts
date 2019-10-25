import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FormClienteComponent } from './cliente/form-cliente/form-cliente.component';
import { ListaClienteComponent } from './cliente/lista-cliente/lista-cliente.component';
import { FormProductoComponent } from './producto/form-producto/form-producto.component';
import { ListaProductoComponent } from './producto/lista-producto/lista-producto.component';
import { FormFacturaComponent } from './factura/form-factura/form-factura.component';
import { ListaFacturaComponent } from './factura/lista-factura/lista-factura.component';
import { HeaderComponent } from './menu/header/header.component';
import { FooterComponent } from './menu/footer/footer.component';
import { NavBarComponent } from './menu/nav-bar/nav-bar.component';
import { ItemComponent } from './item/item/item.component';
import { ClienteComponent } from './cliente/cliente/cliente.component';
import { ProductoComponent } from './producto/producto/producto.component';
import { FacturaComponent } from './factura/factura/factura.component';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


const routes : Routes = [
  {
    path: 'clientes',
    component: ClienteComponent
  },
  {
    path: 'productos',
    component: ProductoComponent
  },
  {
    path: 'facturacion',
    component: FacturaComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    FormClienteComponent,
    ListaClienteComponent,
    FormProductoComponent,
    ListaProductoComponent,
    FormFacturaComponent,
    ListaFacturaComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    ItemComponent,
    ClienteComponent,
    ProductoComponent,
    FacturaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
