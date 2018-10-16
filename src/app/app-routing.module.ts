import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from "./pages/login/login.component";
import { InformacoesComponent } from "./pages/informacoes/informacoes.component";
import { ProtegidoComponent } from "./pages/protegido/protegido.component";


import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  {path:"login", component: LoginComponent },
  {path:"informacoes", component: InformacoesComponent},
  {path:"protegido", component: ProtegidoComponent,  canActivate: [AuthGuard]},
  {path:'', redirectTo:'/login', pathMatch: 'full' },

];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]

})
export class AppRoutingModule { }
