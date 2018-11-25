import { Component, OnInit } from '@angular/core';
import { ListarRegistrosService } from '../servicios/listar-registros.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  solicitudes = [
    {id: 12, titulo: "Nevera Defectuosa", descripcion: "Solciito el recambio de mi nevera", 
    fecha_creacion: new Date(), fecha_solucion: new Date(), responsable: "Juan Mogollon", cliente: "Luis Marin",
    complejidad: "Baja", respuesta: "Aprobada"},
    {id: 13, titulo: "Estufa por garantia", descripcion: "Necesito la garantia", 
    fecha_creacion: new Date(), fecha_solucion: new Date(), responsable: "Luis Marin", cliente: "Juan Mogollon",
    complejidad: "Baja", respuesta: "Denegada"},
    {id: 14, titulo: "Electrodomestico explotó", descripcion: "Mi lavadora explotó", 
    fecha_creacion: new Date(), fecha_solucion: new Date(), responsable: "Elver Suarez", cliente: "Luis Marin",
    complejidad: "Alta", respuesta: "Aprobada"}
  ];

  constructor(private servicioSolicitudes: ListarRegistrosService) {
    servicioSolicitudes.listarSolicitudes().subscribe(data =>{
      this.solicitudes = data;
    })
  }

  ngOnInit() {
  }

}
