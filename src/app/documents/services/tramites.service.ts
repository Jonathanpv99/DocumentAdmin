import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { DocumentT } from '../interfaces/DocumentTipe';


@Injectable({providedIn: 'root'})
export class TramitesService {

  public apiurl: string = 'http://localhost:4300/DocumetT';

  constructor(private httpClient: HttpClient) { }

  searchDocumetType(): Observable<DocumentT[]>{
    const url = `${ this.apiurl }/GetDocT`;
    return this.httpClient.get<DocumentT[]>(url)
    .pipe(
      catchError( error => of([])) //of([]) si encuentra error regresa obserbable bacio
    );
  }

  deletedDocumentType(id: number){
    const url = `${ this.apiurl }/${ id }`;
    return this.httpClient.delete(url)
    .pipe(
      catchError(error => {
        // Manejo del error
        console.error('Se produjo un error:', error);

        // Opcional: lanzar un nuevo error personalizado
        return throwError('Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.');
      }) );
  }


  addDocumentType(doc: DocumentT){

  }
}
