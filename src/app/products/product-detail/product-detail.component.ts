import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../product';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

pageTitle:String ='Product Details';
product: Iproduct;

  constructor(private route: ActivatedRoute, private backROute: Router, private productService:ProductService) { 
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    let id= +this.route.snapshot.paramMap.get('id');   //Convert Parameter String to Numeric Id : Javascript shortcut
    // this.pageTitle +=`:${id}`;  //ES2015 backticks
   
   this.getProduct(id);
    // this.product={
    //   "productId": id,
    //   "productName": "Leaf Rake",
    //   "productCode": "GDN-0011",
    //   "releaseDate": "March 19, 2019",
    //   "description": "Leaf rake with 48-inch wooden handle.",
    //   "price": 19.95,
    //   "starRating": 3.2,
    //   "imageUrl": "assets/images/leaf_rake.png"

    // }

  }

onBack()
{
  console.log('------------');

this.backROute.navigate(['/products']);
console.log('########');

}

getProduct(id:number){
  this.productService.getProduct1(id).subscribe(
data=> this.product=data,
err=>console.log(err)

  );
}






}
