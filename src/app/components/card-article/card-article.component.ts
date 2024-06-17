import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.css']
})
export class ArtigoComponent {

  @Input() title!: string;

  @Input() description!: string;

  public modalIsOpen = false;

  public toggleModal() {
    this.modalIsOpen = !this.modalIsOpen
  }
}
