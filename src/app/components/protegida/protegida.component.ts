import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: [
  ]
})
export class ProtegidaComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    //Antes de esto vamos universal login en la pagina de aut0 y seleccionamos la nueva version esto sirve para que cuando refresquemos 
    //saque de la pagina
    //Hacemos ento en el ngOnInit 
    //tambien debemos ir a Applications en la pagina y configurar en quickStart tal como lo dice debemos ir al appComponent y colocar la inyeccion y el 
    //ngOnInit this.aut.localauthSetup();
    this.auth.userProfile$.subscribe(perfil =>{
      console.log(perfil);
    })
  }

}
