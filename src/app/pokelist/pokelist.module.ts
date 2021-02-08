import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokelistRoutingModule } from './pokelist-routing.module';
import { PokelistComponent } from './pokelist/pokelist.component';
import { DisplayComponent } from './display/display.component';
import { SearchPipe } from './_pipe/search/search.pipe';
import { FormsModule }   from '@angular/forms';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    PokelistComponent,
     DisplayComponent,
      SearchPipe,
    ],
  imports: [
    CommonModule,
    PokelistRoutingModule,
     FormsModule,
   

  ]
})
export class PokelistModule { }
