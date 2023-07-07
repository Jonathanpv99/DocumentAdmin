import { Component } from '@angular/core';
import { DocumentT } from '../../interfaces/DocumentTipe';

@Component({
  selector: 'document-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {



  agregarDocument(){
    const nombre = document.getElementById('txtname') as HTMLInputElement;
    const codigo = document.getElementById('txtcode') as HTMLInputElement;
    const fecha = document.getElementById('txtfecha') as HTMLInputElement;
    const activo = document.getElementById('sltActiv') as HTMLSelectElement;
    const code: number = parseInt(codigo.value);
    const act: number = parseInt(activo.value);
    const docs: DocumentT = {
      nombre: nombre.value,
      codigo: code,
      auditoria: fecha.value,
      activo: act,
    };

    alert(docs);

  }
}
