import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css'],
})
export class ProductcardComponent {
  @Input() item: any;
  @Input() itemm: any;
  // @Output() addToCart: EventEmitter<any> = new EventEmitter();
}
