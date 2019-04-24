import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    console.log("RUTA HIJA");

    this.router.parent.params.subscribe((parametro)=> {
       console.log(parametro);
    })
  }

  ngOnInit() {
  }

}
