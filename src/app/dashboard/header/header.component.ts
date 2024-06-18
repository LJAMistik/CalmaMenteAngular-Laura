import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

@NgModule({
  imports: [
    // ... other imports
    MatToolbarModule
  ],
  // ... other component declarations
})

export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
