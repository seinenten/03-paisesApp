import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {
    
    this.activatedRoute.params
      .pipe(
        switchMap( ( { id } ) => this.paisService.getPaisPorAlpha( id ) ),
        tap(console.log)
      )
      .subscribe(pais => this.pais = pais[0]);

      // DOS MANERAS DE HACERLO

    // this.activatedRoute.params
    //   .subscribe(({ id }) => {
    //     this.paisService.getPaisPorAlpha(id)
    //       .subscribe( pais  => {
    //         console.log(pais);
    //       });
      // })
  }

}
