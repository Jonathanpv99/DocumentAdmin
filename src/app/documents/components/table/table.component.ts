import { Component, Input } from '@angular/core';
import { DocumentT } from '../../interfaces/DocumentTipe';
import { TramitesService } from '../../services/tramites.service';

@Component({
  selector: 'document-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input()
  public docs: DocumentT[] = [];

  constructor( private tramiteService: TramitesService){}

  mostrarDatos(doc: DocumentT){
    const mensaje = `Nombre: ${doc.nombre}, Código: ${doc.codigo},Auditoria: ${doc.auditoria},Activo: ${doc.activo},`;
    alert(mensaje);
  }

  eliminarDatos(doc: DocumentT): void {
    this.tramiteService.deletedDocumentType(doc.id)
      .subscribe();

    this.borrarTbl();
  }

  borrarTbl(){
    this.recargarTbl();
  }

  recargarTbl():void{
    this.tramiteService.searchDocumetType()
    .subscribe( documents => {
      this.docs = documents;
    });
  }



}
