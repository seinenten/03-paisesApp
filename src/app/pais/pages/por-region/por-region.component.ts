import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right:5px;
    }
  `]
})
export class PorRegionComponent  {
  regiones : string[] = ['Americas', 'Europe', 'Asia', 'Oceania', 'Africa', 'Antarctic'];
  regionActiva: string = '';
  paises: Country[] = [];
  hayError: boolean = false;

  constructor(private paisService: PaisService ){}

  activarRegion(region: string){
    this.regionActiva = region;

    
  }

  getClaseCss(region: string):string {
    return (region === this.regionActiva) 
    ? 'btn btn-primary'
    : 'btn btn-outline-primary';
  }

  buscar( region:string ){



    this.hayError = false;
    this.regionActiva = region;

    this.paises = [];

    this.paisService.buscarRegion(region)
      .subscribe( (paises) => {
        this.paises = paises;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }


}
