import { Component, OnInit } from '@angular/core';
import { Iproduct } from './product';
import { ProductService } from './product.service';
import { Observable, throwError } from 'rxjs';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  
  
pageTitle:String='Product List';
imageWidth:number=50;
imageMargin:number=5;
showImage:boolean= false;
// listBinding:String='cart ';

filteredProduct:Iproduct[];
_listBinding: string;
  errorMessage: String;

get listBinding():string{
  return this._listBinding
}

set listBinding(value:string){
  this._listBinding=value;
  this.filteredProduct=this.listBinding ? this.performFilter(this.listBinding):this.products;
}

products: Iproduct[];

      constructor(private productService : ProductService){
       
        this.listBinding='';
      }
      performFilter(filterBy:string):Iproduct[]{
        filterBy=filterBy.toLocaleLowerCase();
        return this.products.filter((product : Iproduct)=>product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
      }


      toggleImage():void
      {
        this.showImage = !this.showImage;
      }   
      ngOnInit(): void {
        console.log('Inside Init Method');
        this.productService.getProduct().subscribe({
         next:products=>
         {
           
          this.products=products,
          this.filteredProduct=this.products;

         },
         error:err=>this.errorMessage=err       

        }) ;

        
        
      }    

}