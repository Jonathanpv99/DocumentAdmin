import { Component, OnInit } from '@angular/core';
import { TramitesService } from '../../services/tramites.service';
import { DocumentT } from '../../interfaces/DocumentTipe';


@Component({
  selector: 'app-type-page',
  templateUrl: './type-page.component.html',
  styleUrls: ['./type-page.component.css']
})
export class TypePageComponent implements OnInit {

  public docsT: DocumentT[] = [];

constructor( private tramiteService: TramitesService){}
  ngOnInit(): void {
    this.searchByType();
  }


searchByType(): void {
  this.tramiteService.searchDocumetType()
  .subscribe( documents => {
    this.docsT = documents;
  });
}


}
