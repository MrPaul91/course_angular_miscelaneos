import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {
  alerta: string ="alert-danger";
  password: string;

  loading: boolean = false;

  propiedades: Object = {
    danger: true
  }

  isAvailable: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  ejecutar(){
    this.loading = true;
    setTimeout( () => {
       this.loading = false;
    }, 3000 )

  }

}
