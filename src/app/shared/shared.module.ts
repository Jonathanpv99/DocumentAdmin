import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';




@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HomePageComponent
  ]
})
export class SharedModule { }
