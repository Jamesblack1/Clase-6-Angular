import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../services/paises.service'

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  constructor(private paisesServices:PaisesService) { }

  paises:any;

  ngOnInit(): void {
    this.getPaises();
  }

  getPaises(){
    this.paisesServices.getPaises().subscribe( resp => {
      // console.log(resp);
      this.paises = resp;
      console.log(this.paises);
    })
  }

}
