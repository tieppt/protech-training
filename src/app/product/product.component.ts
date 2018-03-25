import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ptt-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input('product-name')
  productName: string;
  constructor() { }

  ngOnInit() {
  }

}
