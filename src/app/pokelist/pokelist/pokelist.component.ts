import { Component, OnInit } from '@angular/core';
import * as data from './../../../app/data.json';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
  
@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.scss']
})


export class PokelistComponent implements OnInit {
  test: any;
  chettas: any = [];
  data: any = [];
  public search: any = '';
  query = '';
  page =1;
  pageSize = 100;
  collectionSize="chettas.length";
  constructor(private router: Router, private route: ActivatedRoute, private formsmodule: FormsModule,
   ) {}

  ngOnInit(): void {
    // 
    
    // FILTER AN JSON ARRAY

    this.test = data.default;
    // console.log(this.test);

    // FILERING ARRAR INSIDE AN ARRAY

    this.test.filter((a: any) => {
      a.variations.filter((b: any) => {
        this.chettas.push(b);
      })
    });
    console.log(this.chettas);
  }


  show(val: any) {
    this.data = JSON.stringify(val);
    // console.log(val);
    this.router.navigate(['/display', { title: this.data }]);
  }

}
