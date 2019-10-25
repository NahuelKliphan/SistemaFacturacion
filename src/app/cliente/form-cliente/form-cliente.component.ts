import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/servicio/service.service';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {

  constructor(private database:ServiceService) { }

  ngOnInit() {
  }

}
