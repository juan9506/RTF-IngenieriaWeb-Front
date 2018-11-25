import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    var usuario = $("#usuario").val();
    var clave = $("#clave").val();

    if(usuario == "juan9506" && clave == "9506"){
      this.router.navigate(["/clientes"]);
    }else{
      $("#usuario").val("");
      $("#clave").val("");
      alert("Usuario y/o Clave invalidos");
    }
  }

}
