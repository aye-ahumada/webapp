import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductosListComponent } from './components/productos-list/productos-list.component';
import { ProductoAddComponent } from './components/producto-add/producto-add.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'productos', component: ProductosListComponent},
  {path:'crear-producto', component: ProductoAddComponent},
  {path:'**', component: ErrorComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
