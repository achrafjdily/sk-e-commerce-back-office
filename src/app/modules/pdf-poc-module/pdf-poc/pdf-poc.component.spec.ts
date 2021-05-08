import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfPocComponent } from './pdf-poc.component';

describe('PdfPocComponent', () => {
  let component: PdfPocComponent;
  let fixture: ComponentFixture<PdfPocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfPocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
