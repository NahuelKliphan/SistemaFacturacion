import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/servicio/service.service';

@Component({
  selector: 'app-form-factura',
  templateUrl: './form-factura.component.html',
  styleUrls: ['./form-factura.component.css']
})
export class FormFacturaComponent implements OnInit {

  constructor(private database:ServiceService) { }

  ngOnInit() {
  }

}
