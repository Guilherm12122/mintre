import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DepartamentoComponent } from './components/departamento/departamento.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'departamentos', component: DepartamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
