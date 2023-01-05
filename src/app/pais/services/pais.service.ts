import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private filtro: string = '?fields=name,capital,population,flags,cca2'

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  buscarPais( termino: string ):Observable<Country[]>{
  
    const url = `${ this.apiUrl }/name/${ termino }${ this.filtro }`;
    return this.http.get<Country[]>( url );
    
  }

  buscarCapital(termino: string):Observable<Country[]>{
  
    const url = `${ this.apiUrl }/capital/${ termino }${ this.filtro }`;
    return this.http.get<Country[]>( url );

  }

  buscarRegion(region: string): Observable<Country[]>{
    const url = `${ this.apiUrl }/region/${ region }${ this.filtro }`;
    return this.http.get<Country[]>( url );
  }

  getPaisPorAlpha(id: string):Observable<Country[]>{
  
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country[]>( url );

  }


}
