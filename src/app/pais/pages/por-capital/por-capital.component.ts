import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent  {
  capital : Country[] = [];
  termino:string ='' ;
  hayError: boolean = false;

  capitalesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService ){}

  buscar( termino:string ){

    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino)
      .subscribe( (capital) => {
        this.capital = capital;
      }, (err) => {
        this.hayError = true;
        this.capital = [];
      });
  }

  sugerencias(termino:any){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarCapital(termino)
      .subscribe(
        capitales =>  this.capitalesSugeridos = capitales.splice(0,5)
      );
  }

  buscarSugerido(termino: string){
    this.buscar(termino);
  }
}
