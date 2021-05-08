import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'sk-pdf-poc',
  templateUrl: './pdf-poc.component.html',
  styleUrls: ['./pdf-poc.component.scss']
})
export class PdfPocComponent implements OnInit {

  img = null;
  @ViewChild('invoice', { static: true }) invoice: ElementRef<HTMLImageElement>;

  constructor(private renderer : Renderer2) { }

  ngOnInit(): void {
  }

  pdf2() {
    html2canvas(this.invoice.nativeElement, { useCORS: true , scale : 3}).then(
      (canvas) => {
        const imgData = canvas.toDataURL('image/jpeg',1.0);
        const pdf = new jsPDF({
          orientation: 'portrait',
        });
        const imgProps = pdf.getImageProperties(imgData)
        const pdfw = pdf.internal.pageSize.getWidth();
        const pdfh = (imgProps.height * pdfw ) / imgProps.width;

        pdf.addImage(imgData,'PNG',0,0,pdfw,pdfh);
        pdf.autoPrint();
      }
    )
  }

  async pdf(){
    return await (await html2canvas(this.invoice.nativeElement, { useCORS: true , scale : 3})).toDataURL('image/jpeg',1.0);
  }
}
