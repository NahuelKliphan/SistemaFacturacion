import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFacturaComponent } from './lista-factura.component';

describe('ListaFacturaComponent', () => {
  let component: ListaFacturaComponent;
  let fixture: ComponentFixture<ListaFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
