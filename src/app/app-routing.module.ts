import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/Pages/home-page/home-page.component';
import { TypePageComponent } from './documents/pages/type-page/type-page.component';
import { DocumentPageComponent } from './documents/pages/document-page/document-page.component';
import { TramitePageComponent } from './documents/pages/tramite-page/tramite-page.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'documentT',
    component: TypePageComponent,
  },
  {
    path: 'document',
    component: DocumentPageComponent,
  },
  {
    path: 'tramite',
    component: TramitePageComponent,
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
