import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule,MatSnackBar} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InfRestauranteComponent } from './inf-restaurante/inf-restaurante.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogDeleteComponent } from './Common/delete/dialogdelete.component';
import { DialogInfRestauranteComponent } from './inf-restaurante/dialog/dialogInfRestaurant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaestroComponent } from './maestro/maestro.component';
import { DialogPaisComponent } from './maestro/dialog/dialogPais';
import { DialogDepartamentoComponent } from './maestro/dialog/dialogDepartamento';
import { DialogMunicipioComponent } from './maestro/dialog/dialogMunicipio';
import { DialogSedeComponent } from './inf-restaurante/dialog/dialogSede';

import { DialogMenuCategoriaComponent } from './menu/dialog/dialogmenuCategoria';
import { DialogMenuProductoComponent } from './menu/dialog/dialogmenuProducto';
import { DialogMenuAcompaniamientoComponent } from './menu/dialog/dialogmenuAcompaniamiento';
import { DialogMenuModificacionComponent } from './menu/dialog/dialogmenuModificacion';
import { DialogMenuDescuentoComponent } from './menu/dialog/dialogmenuDescuento';
import { PedidoComponent } from './pedido/pedido.component';
import { DialogPedidoTipoComponent } from './pedido/dialog/dialogpedidoTipo';
import { DialogPedidoTipoPagoComponent } from './pedido/dialog/dialogpedidoTipoPago';
import { DialogPedidoEstadoComponent } from './pedido/dialog/dialogpedidoEstado';
import { DialogPedidoProductoComponent } from './pedido/dialog/dialogpedidoProducto';
import { DialogPedidoInformacionComponent } from './pedido/dialog/dialogpedidoInformacion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule} from '@angular/material/card';
import { MunicipioComponent } from './maestro/Municipio/Municipio.component';
import { DepartamentoComponent } from './maestro/Departamento/Departamento.component';
import {MatListModule} from '@angular/material/list';
import{MatSidenavModule} from '@angular/material/sidenav';
import { LoginComponent } from './login/login';
import { JwtInterceptor } from './security/jwt';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DialogRolComponent } from './usuarios/dialog/dialogRol.component';
import { DialogModuloComponent } from './usuarios/dialog/dialogModulo.component';
import { DialogUsuarioComponent } from './usuarios/dialog/dialogUsuario.component';
import { HomeComponent } from './home/home.component';
import {  MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InfRestauranteComponent,
    DialogDeleteComponent,
    DialogInfRestauranteComponent,
    MaestroComponent,
    DialogPaisComponent,
    DialogDepartamentoComponent,
    DialogMunicipioComponent,
    DialogSedeComponent,
    HomeComponent,
    DialogMenuCategoriaComponent,
    DialogMenuProductoComponent,
    DialogMenuAcompaniamientoComponent,
    DialogMenuModificacionComponent,
    DialogMenuDescuentoComponent,
    PedidoComponent,
    DialogPedidoTipoComponent,
    DialogPedidoTipoPagoComponent,
    DialogPedidoEstadoComponent,
    DialogPedidoProductoComponent,
   DialogPedidoInformacionComponent,
   MunicipioComponent,
   DepartamentoComponent,
   LoginComponent,
   UsuariosComponent,
   DialogRolComponent,
   DialogModuloComponent,
   DialogUsuarioComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
  ],
  providers: [
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
