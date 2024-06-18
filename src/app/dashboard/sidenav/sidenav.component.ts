import { Component, NgModule, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  imports: [
    MatListModule,
    // Outros módulos do Angular Material que você esteja utilizando
  ],
  // ...
})
export class AppModule { }