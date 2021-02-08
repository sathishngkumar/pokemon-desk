import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import{ PokelistComponent } from './pokelist/pokelist.component';
const routes: Routes = [
  {path:"pokelist",component:PokelistComponent},
  {path:"display",component:DisplayComponent }
];

@NgModule({
  declarations:[
  ],
  imports: [RouterModule.forChild(routes),
],
  exports: [RouterModule]
})
export class PokelistRoutingModule { }
