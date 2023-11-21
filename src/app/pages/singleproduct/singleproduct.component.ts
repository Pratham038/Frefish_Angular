import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css'],
})
export class SingleproductComponent implements OnInit {
  id: any;
  singleproductdata: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log('ID from URL:', this.id);
    });
    this.getsingleProduct();
  }

  getsingleProduct() {
    try {
      console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
      this.http
        .get('https://frefishserver.onrender.com/api/products/' + this.id)
        .subscribe((res: any) => {
          this.singleproductdata = res;
          console.log(this.singleproductdata);
        });
    } catch (error) {
      console.log(error);
    }
  }

  addToCart() {
    console.log('Product added to cart:');
  }
}
