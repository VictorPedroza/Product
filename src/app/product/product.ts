import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {
  formGroupProduct: FormGroup;
  products: Product[] = [];

  constructor(private formBuilder: FormBuilder) {

    this.formGroupProduct = formBuilder.group({
      id: [''],
      name: [''],
      description: [''],
      price: [''],
    })
  }

  save() {
    const { name, description, price } = this.formGroupProduct.value;

    this.products.push(this.formGroupProduct.value);

    this.formGroupProduct.reset();

    alert(`
      Produtos Salvos com Sucesso!
      Nome: ${name}
      Descrição: ${description}
      Preço: ${price}
    `)
  }
}

