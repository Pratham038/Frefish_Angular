import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}
  productForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      id: ['', Validators.required],
      quantity: ['', Validators.required],
      name: ['', Validators.required],
      image: [''],
      price: ['', Validators.required],
      reviews: [''],
      stars: ['', Validators.required],
      description: [''],
      category: [''],
      stock: [''],
      featured: [''],
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      try {
        this.http
          .post(
            'https://frefishserver.onrender.com/api/products',
            JSON.stringify(formData),
            {
              headers: { 'Content-Type': 'application/json' },
            }
          )
          .subscribe((res: any) => {
            console.log(res);
            this.productForm.reset();
          });
      } catch (error) {
        console.log(error);
      }

      // ====================================
    }
  }
}
