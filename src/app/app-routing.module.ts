import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main/main.component';
const routes: Routes = [
  {path:'',component:MainComponent,
children:[{path:'',
loadChildren:()=>import('./main/main.module').then(m=>m.MainModule)}
]},
  
// {path:'pokelist',
// loadChildren:()=>import('./pokelist/pokelist.module').then(m=>m.PokelistModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
