import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DocumentsComponent } from './Pages/documents/documents.component';
import { TramitesComponent } from './Pages/tramites/tramites.component';
import { DocumentTipeComponent } from './Pages/document-tipe/document-tipe.component';



@NgModule({
  declarations: [
    DocumentsComponent,
    TramitesComponent,
    DocumentTipeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ]
})
export class TramitesModule { }
