import { Component, OnInit } from '@angular/core';
import { ListarRegistrosService } from '../servicios/listar-registros.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  personal = [
    {id: 1039701466, nombres: "Juan Esteban Mogollon", rol: "Administrador", solicitudes: 20},
    {id: 1040345323, nombres: "Luis Carlos Marin", rol: "Empleado", solicitudes: 15},
    {id: 1023423444, nombres: "Elver Suarez", rol: "Empleado", solicitudes: 50},
    {id: 1040345323, nombres: "Andres Mauricio Acevedo", rol: "Administrador", solicitudes: 21}
  ];

  constructor(private servicioPersonal: ListarRegistrosService) {
    servicioPersonal.listarPersonal().subscribe(data =>{
      this.personal = data;
    })
  }

  ngOnInit() {
  }

}
