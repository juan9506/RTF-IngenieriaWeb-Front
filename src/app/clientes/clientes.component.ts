import { Component, OnInit } from '@angular/core';
import { ListarRegistrosService } from '../servicios/listar-registros.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes = [
    {id: 1039701466, nombre: "Juan Esteban Mogollon", email: "juan.mogollon@udea.edu.co", solicitudes: 21},
    {id: 1040345323, nombre: "Luis Carlos Marin", email: "luis.cmarin@udea.edu.co", solicitudes: 12},
    {id: 1023423444, nombre: "Elver Suarez", email: "elver.suarez@udea.edu.co", solicitudes: 120},
    {id: 1040345323, nombre: "Andres Mauricio Acevedo", email: "andres.acevedo@udea.edu.co", solicitudes: 2}
  ];

  constructor(private servicioClientes: ListarRegistrosService) {
    servicioClientes.listarClientes().subscribe(data =>{
      this.clientes = data;
    })
   }

  ngOnInit() {
  }

  agregarCliente(){
    var id = $("#id").val();
    var nombre = $("#nombre").val();
    var email = $("#email").val();
    var solicitudes = $("#nsolicitudes").val();
    var nuevoCliente = {id: id, nombre: nombre, email: email, solicitudes: solicitudes};
    this.clientes.push(nuevoCliente);
    $("#id").val("");
    $("#nombre").val("");
    $("#email").val("");
    $("#nsolicitudes").val("");
  }
}
