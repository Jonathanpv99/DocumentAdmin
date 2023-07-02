import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/Pages/home-page/home-page.component';
import { DocumentTipeComponent } from './tramites/Pages/document-tipe/document-tipe.component';
import { DocumentsComponent } from './tramites/Pages/documents/documents.component';
import { TramitesComponent } from './tramites/Pages/tramites/tramites.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'documentT',
    component: DocumentTipeComponent,
  },
  {
    path: 'document',
    component: DocumentsComponent,
  },
  {
    path: 'tramite',
    component: TramitesComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
  ],
  exports: [
    RouterModule,
  ]

})
export class AppRoutingModule { }
