import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { HomeComponent } from './home/home.component';
import { InfRestauranteComponent } from './inf-restaurante/inf-restaurante.component';
import { LoginComponent } from './login/login';
import { DepartamentoComponent } from './maestro/Departamento/Departamento.component';
import { MaestroComponent } from './maestro/maestro.component';
import { MunicipioComponent } from './maestro/Municipio/Municipio.component';
import { MenuComponent } from './menu/menu.component';
import { PedidoComponent } from './pedido/pedido.component';
import { AuthGuard } from './security/auth';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path : '', redirectTo: '/menu', pathMatch:'full' },
  {path : 'menu',component:HomeComponent},
  {path : 'carrito',component:CarritoComponent},
  {path : 'producto',component:MenuComponent, canActivate: [AuthGuard]},
  {path : 'inf-restaurante',component:InfRestauranteComponent, canActivate: [AuthGuard]},
  {path : 'maestro',component:MaestroComponent , canActivate: [AuthGuard]},
  {path : 'maestro/municipio/:id',component:MunicipioComponent , canActivate: [AuthGuard]},
  {path : 'maestro/departamento/:id',component:DepartamentoComponent , canActivate: [AuthGuard]},
  {path : 'pedido',component:PedidoComponent , canActivate: [AuthGuard]},
  {path : 'usuarios',component:UsuariosComponent , canActivate: [AuthGuard]},
  {path : 'login',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
