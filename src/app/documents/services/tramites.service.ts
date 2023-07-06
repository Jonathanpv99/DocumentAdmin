import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { DocumentT } from '../interfaces/DocumentTipe';


@Injectable({providedIn: 'root'})
export class TramitesService {

  public url: string = 'http://localhost:4300/DocumetT/GetDocT';

  constructor(private httpClient: HttpClient) { }

  searchDocumetType(): Observable<DocumentT[]>{
    return this.httpClient.get<DocumentT[]>(this.url)
    .pipe(
      catchError( error => of([])) //of([]) si encuentra error regresa obserbable bacio
    );
  }

  deletedDocumentType(id: number){
    return this.httpClient.delete(this.url+'/'+id)
  }
}
