import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>

    <h1>
      PSL is great !
    </h1>
  `,
  styles: [`
     p {
      font-size: 20px;
     }
     h1 {
       color: blue;
       font-size: 30px;
       margin: 20px;
       border-style: groove;
       border-width: 10px;
       border-color: black;

     }
     `

  ]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
