import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
// import{ NavbarComponent } from '../components/navbar/navbar.component';
const routes: Routes = [
  {path:'main',component:MainComponent},
  // {path:'',component:NavbarComponent},
  {path:'',
loadChildren:()=>import('../pokelist/pokelist.module').then(m=>m.PokelistModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
