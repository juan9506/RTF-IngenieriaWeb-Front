import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { PersonalComponent } from './personal/personal.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ListarRegistrosService } from './servicios/listar-registros.service';

const routes: Route[] = [
  {path: '', component: LoginComponent},
  {path: 'solicitudes', component: SolicitudesComponent},
  {path: 'personal', component: PersonalComponent},
  {path: 'clientes', component: ClientesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SolicitudesComponent,
    PersonalComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ListarRegistrosService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
