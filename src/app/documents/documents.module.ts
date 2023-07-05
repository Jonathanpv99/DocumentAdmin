import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypePageComponent } from './pages/type-page/type-page.component';
import { DocumentPageComponent } from './pages/document-page/document-page.component';
import { TramitePageComponent } from './pages/tramite-page/tramite-page.component';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';




@NgModule({
  declarations: [

  
    TypePageComponent,
        DocumentPageComponent,
        TramitePageComponent,
        TableComponent,
        FormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DocumentsModule { }
