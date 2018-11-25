import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../modelos/Cliente';
import { Solicitud } from '../modelos/Solicitud';
import { Personal } from '../modelos/Personal';

@Injectable({
  providedIn: 'root'
})
export class ListarRegistrosService {

  constructor(private clienteHttp: HttpClient) { }

  listarClientes(): Observable<Cliente[]>{
    return this.clienteHttp.get<Cliente[]>('http://localhost:8080/RTF-IW/webresources/servicios/listarClientes');
  }

  listarSolicitudes(): Observable<Solicitud[]>{
    return this.clienteHttp.get<Solicitud[]>('http://localhost:8080/RTF-IW/webresources/servicios/listarSolicitudes');
  }

  listarPersonal(): Observable<Personal[]>{
    return this.clienteHttp.get<Personal[]>('http://localhost:8080/RTF-IW/webresources/servicios/listarPersonal');
  }
}
