import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTipeComponent } from './document-tipe.component';

describe('DocumentTipeComponent', () => {
  let component: DocumentTipeComponent;
  let fixture: ComponentFixture<DocumentTipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentTipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentTipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
