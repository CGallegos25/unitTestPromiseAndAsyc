import { Component, OnInit } from '@angular/core';
import { PromesasService } from './services/promesas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'unitTestPromise';
  responsePromesa = {};
  rejectPromesa = '';
  constructor(private promesasService: PromesasService) { }

  ngOnInit(): void {
    this.promesasService.getEmpleadoP().then(
      (res) => {
        this.responsePromesa = res;
      }
    );
  }

  getPromesa(): Promise<number | null> {
    return new Promise<number | null>( () => {
      this.promesasService.getEmpleado(1).then(
        empleado => {
          this.responsePromesa = empleado;
        }
      ).catch(err => {
          this.rejectPromesa = err;
        }
      );
    });
  }

  getInfoUsuarioF(): void {
    this.promesasService.getInfoUsuario(1).then( res => {
      console.log(res)
    }).catch(err => {
      console.log(err);
    });
  }
}
