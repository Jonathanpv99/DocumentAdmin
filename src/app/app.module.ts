import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NabarComponent } from './shared/components/nabar/nabar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { DocumentsModule } from './documents/documents.module';


@NgModule({
  declarations: [
    AppComponent,
    NabarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    DocumentsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
