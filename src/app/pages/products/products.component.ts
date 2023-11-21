import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getData();
  }
  data: any[] = [];
  getData() {
    console.log('working');

    try {
      this.http
        .get('https://frefishserver.onrender.com/api/products')
        .subscribe((res: any) => {
          console.log(res);
          this.data = res;
        });
    } catch (error) {
      console.log('error');
    }
  }
}
