import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
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
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
