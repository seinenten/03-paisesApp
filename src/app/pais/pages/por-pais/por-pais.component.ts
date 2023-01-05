import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [ 
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent  {

  paises : Country[] = [];
  termino:string ='' ;
  hayError: boolean = false;
  
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;
  

  constructor(private paisService: PaisService ){}

  buscar( termino:string ){
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino)
      .subscribe( (paises) => {
        this.paises = paises;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias(termino:any){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino)
      .subscribe(
        paises =>  this.paisesSugeridos = paises.splice(0,5)
      );
  }

  buscarSugerido(termino: string){
    this.buscar(termino);
  }

}
